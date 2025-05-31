import "../App.css";
import { Badge } from "@/components/ui/badge.jsx";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button.jsx";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { createNewsletter } from "@/api/ContactsService.js";

export default function Newsletter() {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm();
  const { t } = useTranslation("home");

  const handleNewsletterSubmit = async (formData) => {
    try {
      const data = await createNewsletter(formData);
      toast.success(t("newsletter.success"), {
        description: data?.detail,
        duration: Infinity,
        closeButton: true,
      });
      reset({ email: "" });
      console.log(data);
    } catch (error) {
      reset({ email: "" });
      if (error.status === 400) {
        Object.entries(error.data).forEach(([fieldName, message]) => {
          setError(fieldName, {
            type: "server",
            message: Array.isArray(message) ? message[0] : message,
          });
        });
      } else {
        toast.error(`${error.status}-${error.statusText}`, {
          description: error.data?.detail,
          duration: Infinity,
          closeButton: true,
        });
        console.log(error);
      }
    }
  };

  return (
    <section className="bg-white">
      <div className="container mx-auto py-20 space-y-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-6 px-4">
            <Badge
              className="rounded-none bg-gradient-to-br border-transparent from-[#c21d03] to-[#fd5732]  text-white"
              variant="outline"
            >
              {t("newsletter.badge")}
            </Badge>
            <h2 className="font-black text-xl md:text-2xl lg:text-4xl uppercase max-w-sm">
              {t("newsletter.title")}
            </h2>
            <p className="text-left">{t("newsletter.description")}</p>
          </div>
          <div className="block space-y-6 w-full lg:w-auto px-4">
            <form
              onSubmit={handleSubmit(handleNewsletterSubmit)}
              className="flex flex-col lg:flex-row items-center justify-between gap-2"
            >
              <div className="flex flex-col items-start justify-between gap-2 w-full  relative">
                <Input
                  className="w-full bg-transparent  rounded-none placeholder:uppercase placeholder:text-xs"
                  type="email"
                  placeholder={t("newsletter.input.placeholder")}
                  {...register("email", {
                    required: {
                      value: true,
                      message: t("newsletter.validation.required"),
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: t("newsletter.validation.invalid_email"),
                    },
                    maxLength: {
                      value: 200,
                      message: t("newsletter.validation.maxlength"),
                    },
                  })}
                />
                {errors?.email && (
                  <span className="text-xs text-red-500 absolute top-0 -mt-4">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <Button
                type="submit"
                className="w-full lg:w-auto rounded-none bg-gradient-to-br border-transparent from-[#c21d03] to-[#fd5732] text-white capitalize"
              >
                {t("newsletter.button")}
              </Button>
            </form>
            <p className="text-xs">{t("newsletter.legal")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
