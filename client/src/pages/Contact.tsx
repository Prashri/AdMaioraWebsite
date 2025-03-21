import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";

// Form validation schema using Zod
const formSchema = z.object({
  name: z.string().min(1, { message: "Please enter your name" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(1, { message: "Please enter your message" })
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [formSuccess, setFormSuccess] = useState(false);
  
  // Initialize form with react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });
  
  // Handle form submission
  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    setFormSuccess(true);
    form.reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setFormSuccess(false);
    }, 5000);
  };
  
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-['Montserrat'] font-bold text-center mb-3 text-[#1E3A8A]">Let's Simplify Your Procurement</h2>
        <h3 className="text-xl text-[#22C55E] font-medium text-center mb-12 font-['Montserrat']">The Journey to Greater Things Begins Now</h3>
        
        <div className="flex flex-col md:flex-row max-w-5xl mx-auto">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <Card className="bg-[#F9FAFB] shadow-md">
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-neutral-700 font-medium font-['Open_Sans']">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              className="border border-[#E5E7EB] rounded-md focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-neutral-700 font-medium font-['Open_Sans']">Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your email address" 
                              className="border border-[#E5E7EB] rounded-md focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-neutral-700 font-medium font-['Open_Sans']">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Your message" 
                              rows={5}
                              className="border border-[#E5E7EB] rounded-md focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-[#22C55E] hover:bg-[#22C55E]/90 text-white font-bold py-3 px-8 rounded-md shadow-md transition transform hover:-translate-y-1"
                    >
                      Send Message
                    </Button>
                  </form>
                </Form>
                
                {formSuccess && (
                  <Alert className="mt-4 bg-green-100 text-green-700 rounded-md">
                    <AlertDescription>
                      Thank you for your message! We'll get back to you shortly.
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-[#1E3A8A] text-white p-8 rounded-lg shadow-md h-full">
              <h4 className="text-2xl font-['Montserrat'] font-bold mb-6">Contact Details</h4>
              
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <Mail className="mr-3 h-5 w-5" />
                  <span className="font-medium">Email:</span>
                </div>
                <a href="mailto:info@admaiora.in" className="text-white hover:underline ml-8">info@admaiora.in</a>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <Linkedin className="mr-3 h-5 w-5" />
                  <span className="font-medium">LinkedIn:</span>
                </div>
                <a href="#" className="text-white hover:underline ml-8">Ad Maiora Profile</a>
              </div>
              
              <div className="bg-[#1E3A8A]/30 p-6 rounded-lg mt-8">
                <p className="text-lg mb-4">For pricing details, fill out the form or email us—we'll respond swiftly!</p>
                <p className="italic">Ad Maiora is committed to helping Indian SMEs thrive through efficient procurement solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
