
import { toast } from "sonner";

export const submitContactForm = async (data: { 
  name: string; 
  email: string; 
  message: string; 
}) => {
  console.log("Form data:", data);
  
  // This is a placeholder for the actual form submission
  // In a real implementation, this would connect to a backend API
  return new Promise((resolve) => {
    // Simulate API call
    setTimeout(() => {
      toast.success("Form submitted successfully! We'll be in touch soon.");
      resolve({ success: true });
    }, 1000);
  });
};
