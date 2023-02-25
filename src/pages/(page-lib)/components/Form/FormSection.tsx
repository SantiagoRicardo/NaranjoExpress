import { type FC, useState } from "react";
import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa";  
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, type FormSchema } from "@/server/api/routers/form/schemas";
import cs from "@/utils/cs";
import Form from "@/components/Form";
import { CheckIcon } from "@heroicons/react/24/solid";
import { env } from "@/env.mjs";

const contactLinks = [
  {
    label: "+57-304-202-6189",
    icon: <FaPhone className="mx-3" />,
    url: "tel:+57-304-202-6189",
  },
  {
    label: "naranjoexpress27@gmail.com",
    icon: <FaEnvelope className="mx-3" />,
    url: "",
  },
  {
    label: "Montería, Córdoba",
    icon: <FaMap className="mx-3" />,
    url: "https://goo.gl/maps/Hc6nVUBPKF2V24T86",
  },
] as const;

const FormSection: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  async function handleSubmit(data: FormSchema): Promise<void> {
    setIsSubmitting(true);

    try {
      const res = await fetch(`https://formsubmit.co/${env.NEXT_PUBLIC_CLIENT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          _captcha: false,
        }),
      });

      if (res.status === 200) {
        setIsSuccess(true);
        form.reset();
      }
    } catch (error) {
      console.error(error);
    }

    setIsSubmitting(false);
  }

  return (
    <section id="form" className="my-32 flex justify-center gap-12">
      <div className="flex w-full flex-col gap-4 bg-[#010449] py-12 px-8 md:py-12 md:px-16 lg:w-auto lg:flex-row lg:gap-24 xl:gap-64 xl:rounded-2xl">
        <div className="flex flex-col text-center md:text-left">
          <div>
            <h1 className="mb-4 text-3xl font-bold text-white">Consigue una cotización</h1>

            <p className="max-w-lg text-lg leading-8 text-[#abade6]">
              ¿Tienes preguntas? Tenemos respuestas.
              <span className="block">Charlemos como viejos amigos.</span>
            </p>
          </div>

          <div className="my-12 flex flex-col gap-2 font-semibold text-[#b2b2e7]">
            {contactLinks.map(({ label, icon, url }) => (
              <a
                key={label}
                href={url}
                className="flex items-center gap-2 rounded p-4 hover:bg-[#030d59] hover:text-white hover:shadow-sm"
              >
                {icon}
                {label}
              </a>
            ))}
          </div>
        </div>

        <Form
          className="bg-white p-8 shadow-xl sm:self-end md:w-[30rem] lg:self-start lg:rounded-2xl"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <Form.Input
            label="Nombre"
            required
            {...form.register("name")}
            placeholder="Nombre"
            error={form.formState.errors.name?.message}
          />

          <Form.Input
            label="Correo"
            required
            {...form.register("email")}
            placeholder="correo@email.com"
            error={form.formState.errors.email?.message}
          />

          <Form.Textarea
            label="Mensaje"
            placeholder="Mensaje"
            required
            {...form.register("message")}
            className="h-48 max-h-48 overflow-y-scroll"
          />

          <button
            type="submit"
            className={cs(
              "mt-8 self-end rounded-md px-6 py-3 text-sm font-medium text-white shadow-sm transition delay-150 duration-300 ease-in-out",
              isSubmitting && "cursor-not-allowed opacity-50",
              isSuccess
                ? "cursor-not-allowed bg-green-500"
                : "bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-blue-400 active:scale-95 active:bg-blue-600"
            )}
            disabled={isSubmitting || isSuccess}
          >
            {isSubmitting ? (
              "Enviando..."
            ) : isSuccess ? (
              <span className="flex items-center gap-2">
                Enviado
                <CheckIcon className="h-5 w-5" />
              </span>
            ) : (
              "Enviar Mensaje"
            )}
          </button>
        </Form>
      </div>
    </section>
  );
};
export default FormSection;
