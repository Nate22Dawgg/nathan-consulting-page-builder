
import { toast } from "sonner";
import { supabase } from '@/integrations/supabase/client';

export const submitContactForm = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const { error } = await supabase.from('contact_messages').insert([data]);

    if (error) {
      console.error('Supabase error:', error);
      toast.error("There was an issue submitting the form. Please try again.");
      throw error;
    }

    toast.success("Form submitted successfully! We'll be in touch soon.");
    return { success: true };
  } catch (err) {
    console.error('Unexpected error:', err);
    toast.error("Something went wrong. Please try again.");
    throw err;
  }
};
