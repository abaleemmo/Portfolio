"use client";

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

interface TranscriptRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required." }),
  lastName: z.string().min(1, { message: "Last Name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  relationship: z.enum(["Colleague", "Friend", "Potential Employer", "Other"], {
    errorMap: () => ({ message: "Please select an option." }),
  }),
  otherRelationship: z.string().optional(),
}).superRefine((data, ctx) => {
  if (data.relationship === "Other" && !data.otherRelationship) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Please specify your relationship.",
      path: ["otherRelationship"],
    });
  }
});

const TranscriptRequestModal: React.FC<TranscriptRequestModalProps> = ({ isOpen, onClose }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      relationship: undefined,
      otherRelationship: "",
    },
  });

  const relationship = form.watch("relationship");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-transcript-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast.success("Transcript request sent successfully!");
        form.reset();
        onClose();
      } else {
        const errorData = await response.json();
        toast.error(`Failed to send request: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error("Error sending transcript request:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Request Transcript</DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-400">
            Fill out the form below to request a transcript.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="firstName" className="text-right">
              First Name
            </Label>
            <Input
              id="firstName"
              {...form.register("firstName")}
              className="col-span-3"
            />
            {form.formState.errors.firstName && (
              <p className="col-span-4 text-right text-sm text-red-500">{form.formState.errors.firstName.message}</p>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="lastName" className="text-right">
              Last Name
            </Label>
            <Input
              id="lastName"
              {...form.register("lastName")}
              className="col-span-3"
            />
            {form.formState.errors.lastName && (
              <p className="col-span-4 text-right text-sm text-red-500">{form.formState.errors.lastName.message}</p>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              {...form.register("email")}
              className="col-span-3"
            />
            {form.formState.errors.email && (
              <p className="col-span-4 text-right text-sm text-red-500">{form.formState.errors.email.message}</p>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="relationship" className="text-right">
              Relationship
            </Label>
            <Select onValueChange={(value) => form.setValue("relationship", value as any)} value={relationship}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Choose an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Colleague">Colleague</SelectItem>
                <SelectItem value="Friend">Friend</SelectItem>
                <SelectItem value="Potential Employer">Potential Employer</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
            {form.formState.errors.relationship && (
              <p className="col-span-4 text-right text-sm text-red-500">{form.formState.errors.relationship.message}</p>
            )}
          </div>
          {relationship === "Other" && (
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="otherRelationship" className="text-right">
                Specify
              </Label>
              <Textarea
                id="otherRelationship"
                {...form.register("otherRelationship")}
                className="col-span-3"
                placeholder="e.g., University Admissions Officer"
              />
              {form.formState.errors.otherRelationship && (
                <p className="col-span-4 text-right text-sm text-red-500">{form.formState.errors.otherRelationship.message}</p>
              )}
            </div>
          )}
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit Request"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TranscriptRequestModal;