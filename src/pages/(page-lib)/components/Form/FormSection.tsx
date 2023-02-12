import { type FC } from "react";
import Image from "next/image";
import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, type FormSchema } from "@/server/api/routers/form/schemas";
import { api } from "@/utils/api";
import cs from "@/utils/cs";
import { CheckIcon } from "@heroicons/react/24/solid";
import Form from "@/components/Form";

const FormSection: FC = () => {
  const submitForm = api.form.submit.useMutation();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  function handleSubmit(data: FormSchema): void {
    submitForm.mutate(data);
  }

  return (
    <section>
      <div className="justify-center md:flex">
        <div className="flex-col px-16 md:justify-center">
          <div className="justify-around">
            <h1 className="mb-4 text-3xl font-bold text-blue-900">Consigue una cotización</h1>
            <p className="max-w-[20rem] text-lg font-semibold leading-8 text-blue-900">
              Complete el formulario y nuestro equipo se comunicará con usted dentro de las 24
              horas.
            </p>
          </div>

          <div className="my-12 gap-4 font-semibold text-blue-900">
            <a
              href="tel:+57-304-202-6189"
              className="flex items-center gap-2 rounded p-4 hover:bg-[#030d59] hover:text-white hover:shadow-sm"
            >
              <FaPhone className="mx-3" />
              +57-304-202-6189
            </a>

            <a className="flex items-center gap-2 rounded p-4 hover:bg-[#030d59] hover:text-white hover:shadow-sm">
              <FaEnvelope className="mx-3" />
              naranjoexpress27@gmail.com
            </a>

            <a
              href="https://goo.gl/maps/Hc6nVUBPKF2V24T86"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded p-4 hover:bg-[#030d59] hover:text-white hover:shadow-sm"
            >
              <FaMap className="mx-3" />
              Montería, Córdoba
            </a>
          </div>

          <div className="-mx-10">
            <Image src="/naranjo-express-transparent.png" alt="Picture" width={300} height={300} />
          </div>
        </div>

        <Form
          className="mx-10 mb-5 flex-col rounded-lg bg-[#02044a] py-9 px-5 text-white shadow-xl md:w-[30rem]"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <h2 className="mb-10 text-center text-3xl font-black text-amber-400">Contáctanos</h2>

          <Form.Input
            label="Nombre"
            required
            {...form.register("name")}
            placeholder="Su nombre"
            error={form.formState.errors.name?.message}
          />

          <Form.Input
            label="Correo"
            required
            {...form.register("email")}
            placeholder="correo@email.com"
            error={form.formState.errors.email?.message}
          />

          <Form.Textarea label="Mensaje" required {...form.register("message")} className="h-48" />

          <button
            type="submit"
            className={cs(
              "my-2 self-end rounded-md px-6 py-3 text-sm font-medium text-white shadow-sm transition delay-150 duration-300 ease-in-out",
              submitForm.isLoading && "cursor-not-allowed opacity-50",
              submitForm.isSuccess
                ? "cursor-not-allowed bg-green-500"
                : "bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400"
            )}
            disabled={submitForm.isLoading || submitForm.isSuccess}
          >
            {submitForm.isLoading ? (
              "Enviando..."
            ) : submitForm.isSuccess ? (
              <span className="flex items-center gap-2">
                Enviado
                <CheckIcon className="h-5 w-5" />
              </span>
            ) : (
              "Enviar"
            )}
          </button>
        </Form>
      </div>
    </section>
  );
};
export default FormSection;
