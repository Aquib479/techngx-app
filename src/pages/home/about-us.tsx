import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const AboutUs: React.FC = () => {
  const formSchema = z.object({
    name: z.string().min(3, {
      message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter valid email",
    }),
    user_message: z
      .string()
      .min(20, {
        message: "Message must be at least 10 characters.",
      })
      .max(250, {
        message: "Message must not be longer than 30 characters.",
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      user_message: "",
    },
  });

  // submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <>
      <div className="main space-y-12 mt-40">
        <div className="">
          <h1 className="text-3xl font-medium text-center sm:text-4xl">
            About Us
          </h1>
          <p className="text-base font-light text-center pt-2 leading-5 sm:text-lg">
            NextGen Technologies specializes in providing seamless consulting
            services and end-to-end custom solutions to simplify <br /> the
            complexities of modern business operations.
          </p>
        </div>
        <div
          className="main h-[600px] text-center relative flex justify-center items-center opacity-70 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/assets/about.jpg')` }}
        >
          <div
            className="absolute inset-0 bg-black/10 bg-opacity-40"
            style={{ zIndex: -1 }}
          ></div>
          <div className="relative rounded-lg shadow-lg w-full sm:w-4/6 lg:w-1/2 m-auto space-y-12 p-6 sm:p-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white space-y-4">
              Ready To Take Business To <br />
              <span className="text-indigo-600">Next Level ?</span>
              <p className="text-sm sm:text-base">
                Contact us today for consultation or a deep dive into our
                services.
              </p>
            </h1>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="flex justify-start text-white">
                        Name <span className="text-red-500 px-1">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Name"
                          {...field}
                          className="h-12 bg-white/80 border-0"
                        />
                      </FormControl>
                      <FormMessage className="flex justify-start text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="flex justify-start text-white">
                        Email <span className="text-red-500 px-1">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Email"
                          {...field}
                          className="h-12 bg-white/80 border-0"
                        />
                      </FormControl>
                      <FormMessage className="flex justify-start text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="user_message"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="flex justify-start text-white">
                        Message <span className="text-red-500 px-1">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter your message"
                          className="resize-none bg-white/80 border-0 h-28"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="flex justify-start text-red-500" />
                    </FormItem>
                  )}
                />
                <Button
                  variant="default"
                  className="bg-indigo-600 px-8 hover:bg-indigo-700 flex justify-start"
                  type="submit"
                >
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
