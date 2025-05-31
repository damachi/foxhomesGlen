import "../App.css";
import "react-phone-number-input/style.css";

import { Controller, useForm } from "react-hook-form";
import { Label } from "@/components/ui/label.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Loader2, Plus } from "lucide-react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { addContact } from "@/api/ContactsService.js";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    setError,
    formState: { errors, isValidating, isSubmitting },
  } = useForm();
  const { t } = useTranslation("contact");
  const isLoading = isValidating || isSubmitting;

  const handleContactFormSubmission = async (contactFormData) => {
    try {
      const data = await addContact(contactFormData);

      toast.success(`Contact has been created successfully`, {
        description: data?.details,
        duration: Infinity,
        closeButton: true,
      });

      reset();
    } catch (error) {
      if (error.status === 400) {
        Object.entries(error.data).forEach(([field, message]) => {
          setError(field, { type: "server", message: message });
        });
      } else {
        toast.error("Failed to submit contact", {
          description: error.data?.detail ? error.data.detail : error.data,
          duration: Infinity,
          position: "bottom-center",
          closeButton: true,
        });
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleContactFormSubmission)}
      className="flex flex-col items-start gap-6 bg-white px-4 py-4  w-full lg:max-w-2xl mx-auto border"
    >
      <h2 className="font-black text-xl md:text-2xl lg:text-3xl uppercase mx-auto">
        {t("form.title")}
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
        <div className="space-y-4 w-full">
          <Label htmlFor="first_name" className="capitalize">
            {t("form.firstName.label")}
          </Label>
          <Input
            className="rounded-none bg-[#f1f1f1] placeholder:text-sm"
            id="first_name"
            type="text"
            name="first_name"
            placeholder={t("form.firstName.placeholder")}
            {...register("first_name", {
              required: {
                value: true,
                message: t("form.firstName.errorsMessages.required"),
              },
              minLength: {
                value: 2,
                message: t("form.firstName.errorsMessages.minimum"),
              },
              maxLength: {
                value: 30,
                message: t("form.firstName.errorsMessages.maximum"),
              },
            })}
          />
          <span className="text-xs text-red-500 h-2 inline-block">
            {errors.first_name && errors.first_name.message}
          </span>
        </div>
        <div className="space-y-4 w-full">
          <Label htmlFor="last_name" className="capitalize">
            {t("form.lastName.label")}
          </Label>
          <Input
            className="rounded-none bg-[#f1f1f1] placeholder:text-sm"
            id="last_name"
            type="text"
            name="last_name"
            placeholder={t("form.lastName.placeholder")}
            {...register("last_name", {
              required: {
                value: true,
                message: t("form.lastName.errorsMessages.required"),
              },
              minLength: {
                value: 2,
                message: t("form.lastName.errorsMessages.minimum"),
              },
              maxLength: {
                value: 30,
                message: t("form.lastName.errorsMessages.maximum"),
              },
            })}
          />
          <span className="text-xs text-red-500 h-2 inline-block">
            {errors.last_name && errors.last_name.message}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-start justify-between gap-4 w-full">
        <Label htmlFor="email" className="capitalize">
          {t("form.email.label")}
        </Label>
        <Input
          id="email"
          className="w-full rounded-none bg-[#f1f1f1] placeholder:text-sm"
          name="email"
          type="email"
          placeholder={t("form.email.placeholder")}
          {...register("email", {
            required: {
              value: true,
              message: t("form.email.errorsMessages.required"),
            },
            minLength: {
              value: 3,
              message: t("form.email.errorsMessages.minimum"),
            },
            maxLength: {
              value: 50,
              message: t("form.email.errorsMessages.maximum"),
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: t("form.email.errorsMessages.pattern"),
            },
          })}
        />
        <span className="text-xs text-red-500 h-2">
          {errors.email && errors.email.message}
        </span>
      </div>
      <div className="flex flex-col items-start justify-between gap-4 w-full">
        <Label htmlFor="phone" className="capitalize">
          {t("form.phone.label")}
        </Label>
        <Controller
          name="phone"
          control={control}
          rules={{
            required: t("form.phone.errorsMessages.required"),
            validate: (value) => {
              if (!value) return t("form.phone.errorsMessages.required");
              if (!isValidPhoneNumber(value))
                return t("form.phone.errorsMessages.validate");
              return true;
            },
          }}
          render={({ field }) => (
            <PhoneInput
              className="flex flex-row items-center justify-start gap-4 rounded-none bg-[#f1f1f1] w-full px-2 h-10 placeholder:text-blue-500 placeholder:text-sm"
              international={true}
              country="CH"
              smartCaret={true}
              defaultCountry="CH"
              placeholder={t("form.phone.placeholder")}
              onValueChange={field.onChange}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <span className="text-xs text-red-500 h-2">
          {errors.phone && errors.phone.message}
        </span>
      </div>
      <div className="flex flex-col items-start justify-between gap-4 w-full">
        <Label htlmFor="subject" className="capitalize">
          {t("form.subject.label")}
        </Label>
        <Input
          id="subject"
          className="w-full rounded-none bg-[#f1f1f1] placeholder:text-sm"
          name="subject"
          type="text"
          placeholder={t("form.subject.placeholder")}
          {...register("subject", {
            required: {
              value: true,
              message: t("form.subject.errorsMessages.required"),
            },
            minLength: {
              value: 8,
              message: t("form.subject.errorsMessages.minimum"),
            },
            maxLength: {
              value: 50,
              message: t("form.subject.errorsMessages.maximum"),
            },
          })}
        />
        <span className="text-xs text-red-500 h-2">
          {errors.subject && errors.subject.message}
        </span>
      </div>
      <div className="flex flex-col items-start justify-between gap-4 w-full">
        <Label htlmFor="message" className="capitalize">
          {t("form.message.label")}
        </Label>
        <Textarea
          id="message"
          className="w-full rounded-none bg-[#f1f1f1] h-32 placeholder:text-sm"
          name="message"
          type="text"
          placeholder={t("form.message.placeholder")}
          {...register("message", {
            required: {
              value: true,
              message: t("form.message.errorsMessages.required"),
            },
            minLength: {
              value: 30,
              message: t("form.message.errorsMessages.minimum"),
            },
            maxLength: {
              value: 5000,
              message: t("form.message.errorsMessages.maximum"),
            },
          })}
        />
        <span className="text-xs text-red-500 h-2">
          {errors.message && errors.message.message}
        </span>
      </div>
      <Button
        disabled={isLoading}
        type="submit"
        className="w-full rounded-none bg-gradient-to-br border-transparent from-[#c21d03] to-[#fd5732] text-white hover:text-black h-11"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {isSubmitting ? "Submitting..." : "Validating..."}
          </>
        ) : (
          <>
            <Plus className="mr-2 h-4 w-4" />
            Submit Request
          </>
        )}
      </Button>
    </form>
  );
}
