import { MapPinLine } from "phosphor-react";
import { BaseCard } from "../../styles";
import { AddressContent, FormError } from "./styles";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { z } from "zod";

export interface IOrderFormProps {
  register: UseFormRegister<RegisterFormData>;
  errors: FieldErrors<RegisterFormData>;
}

export const registerFormSchema = z.object({
  cep: z
    .string()
    .min(8, { message: "Campo obrigatório" })
    .max(8, { message: "Limite de 8 caracteres" })
    .regex(/^\d+$/, { message: "Apenas números" }),
  street: z
    .string()
    .min(1, { message: "Campo obrigatório" })
    .max(255, { message: "Limite de 5 caracteres" }),
  number: z
    .string()
    .min(1, { message: "Campo obrigatório" })
    .max(255, { message: "Limite de 255 caracteres" }),
  complement: z
    .string()
    .min(1, { message: "Campo obrigatório" })
    .max(255, { message: "Limite de 255 caracteres" }),
  neighborhood: z
    .string()
    .min(1, { message: "Campo obrigatório" })
    .max(255, { message: "Limite de 255 caracteres" }),
  city: z
    .string()
    .min(1, { message: "Campo obrigatório" })
    .max(255, { message: "Limite de 255 caracteres" }),
  state: z
    .string()
    .min(1, { message: "Obrigatório" })
    .max(2, { message: "Limite de 2 caracteres" }),
});

export type RegisterFormData = z.infer<typeof registerFormSchema>;

export default function OrderForm({ errors, register }: IOrderFormProps) {
  return (
    <BaseCard>
      <h3>Complete seu pedido</h3>

      <AddressContent>
        <header>
          <MapPinLine />
          <div>
            <h4>Endereço de Entrega</h4>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </header>

        <section>
          <div>
            <label className="form-sm">
              <input
                type="text"
                placeholder="CEP"
                {...register("cep")}
                maxLength={8}
              />
              {errors.cep && <FormError>{errors.cep.message}</FormError>}
            </label>
          </div>

          <div>
            <label>
              <input type="text" placeholder="Rua" {...register("street")} />
              {errors.street && <FormError>{errors.street.message}</FormError>}
            </label>
          </div>

          <div>
            <label className="form-sm">
              <input type="text" placeholder="Número" {...register("number")} />
              {errors.number && <FormError>{errors.number.message}</FormError>}
            </label>

            <label>
              <input
                type="text"
                placeholder="Complemento"
                {...register("complement")}
              />
              {errors.complement && (
                <FormError>{errors.complement.message}</FormError>
              )}
            </label>
          </div>

          <div>
            <label className="form-sm">
              <input
                type="text"
                placeholder="Bairro"
                {...register("neighborhood")}
              />
              {errors.neighborhood && (
                <FormError>{errors.neighborhood.message}</FormError>
              )}
            </label>

            <label>
              <input type="text" placeholder="Cidade" {...register("city")} />
              {errors.city && <FormError>{errors.city.message}</FormError>}
            </label>

            <label className="form-xm">
              <input
                type="text"
                placeholder="UF"
                {...register("state")}
                maxLength={2}
              />
              {errors.state && <FormError>{errors.state.message}</FormError>}
            </label>
          </div>
        </section>
      </AddressContent>
    </BaseCard>
  );
}
