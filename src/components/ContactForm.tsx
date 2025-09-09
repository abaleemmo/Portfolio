"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { showSuccess, showError } from "@/utils/toast";

const formSchema = z.object({
  first_name: z.string().min(1, { message: "First name is required." }),
  last_name: z.string().min(1, { message: "Last name is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }).optional().or(z.literal("")),
  phone_number: z.string().optional().or(z.literal("")), // Basic string for now, can add regex later if needed
  message: z.string().max(500, { message: "Message must not be longer than 500 characters." }), // No min length
  topic: z.enum(["reference request", "transcript request", "work with me", "other"], {
    required_error: "Please select a topic.",
  }),
  other_topic_description: z.string().optional(),
}).refine((data) => data.email || data.phone_number, {
  message: "Either email or phone number must be provided.",
  path: ["email"], // Attach error to email field, or a general form error
}).refine((data) => {
  if (data.topic === "other") {
    return data.other_topic_description && data.other_topic_description.trim().length > 0;
  }
  return true;
}, {
  message: "Please describe your topic.",
  path: ["other_topic_description"],
});

const ContactForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      message: "",
      topic: undefined, // Set to undefined initially
      other_topic_description: "",
    },
  });

  const selectedTopic = form.watch("topic");

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert([
          {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email || null, // Store null if empty
            phone_number: values.phone_number || null, // Store null if empty
            message: values.message,
            topic: values.topic,
            other_topic_description: values.other_topic_description || null, // Store null if empty
          },
        ]);

      if (error) {
        throw error;
      }

      showSuccess("Your message has been sent successfully!");
      form.reset();
    } catch (error) {
      console.error("Error submitting contact form:", error);
      showError("Failed to send your message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-lg mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your First Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Last Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email (Optional)</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number (Optional)</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="e.g., (123) 456-7890" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Topic</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="reference request">Reference Request</SelectItem>
                  <SelectItem value="transcript request">Transcript Request</SelectItem>
                  <SelectItem value="work with me">Work With Me</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {selectedTopic === "other" && (
          <FormField
            control={form.control}
            name="other_topic_description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Please describe your topic</FormLabel>
                <FormControl>
                  <Textarea placeholder="e.g., Inquiry about a specific project" rows={3} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Your message..." rows={5} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;