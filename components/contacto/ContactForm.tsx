"use client";

import { useState, FormEvent } from "react";

/* ─── GTM helper ─── */
function pushGTMEvent(eventName: string, data?: Record<string, string>) {
  if (typeof window !== "undefined") {
    (window as unknown as { dataLayer: Record<string, unknown>[] }).dataLayer =
      (window as unknown as { dataLayer: Record<string, unknown>[] }).dataLayer || [];
    (window as unknown as { dataLayer: Record<string, unknown>[] }).dataLayer.push({
      event: eventName,
      ...data,
    });
  }
}

const servicios = [
  "Corte Láser CNC",
  "Corte Plasma CNC",
  "Doblez CNC",
  "Corte Guillotina",
  "Corte Pantógrafo",
  "Rolado",
  "Compra de acero / lámina / placa",
  "Joists & Girders",
  "Otro",
];

export function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    servicio: "",
    material: "",
    espesor: "",
    cantidad: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e: Record<string, boolean> = {};
    if (!form.nombre.trim()) e.nombre = true;
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = true;
    if (!form.telefono.trim()) e.telefono = true;
    if (!form.servicio) e.servicio = true;
    return e;
  }

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }

    // Build WhatsApp message with full details
    const lines = [
      `Hola, me gustaría solicitar una cotización.`,
      ``,
      `*Nombre:* ${form.nombre.trim()}`,
      form.empresa.trim() ? `*Empresa:* ${form.empresa.trim()}` : "",
      `*Email:* ${form.email.trim()}`,
      `*Teléfono:* ${form.telefono.trim()}`,
      `*Servicio:* ${form.servicio}`,
      form.material.trim() ? `*Material:* ${form.material.trim()}` : "",
      form.espesor.trim() ? `*Espesor:* ${form.espesor.trim()}` : "",
      form.cantidad.trim() ? `*Cantidad:* ${form.cantidad.trim()}` : "",
      form.mensaje.trim() ? `\n*Detalles:*\n${form.mensaje.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const encoded = encodeURIComponent(lines);
    const waUrl = `https://wa.me/528115115660?text=${encoded}`;

    // GTM event
    pushGTMEvent("contact_form_submit", {
      form_location: "contacto_page",
      servicio: form.servicio,
    });

    setSubmitted(true);

    // Open WhatsApp
    window.open(waUrl, "_blank", "noopener,noreferrer");
  }

  function handleChange(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  if (submitted) {
    return (
      <div className="bg-white border border-gray-200 p-8 lg:p-10 text-center">
        <div className="w-16 h-16 mx-auto mb-5 bg-green-100 flex items-center justify-center rounded-full">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" aria-hidden="true">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3 className="font-[family-name:var(--font-barlow)] text-xl font-bold uppercase text-[#1B4375] mb-2">
          Solicitud enviada
        </h3>
        <p className="font-[family-name:var(--font-inter)] text-sm text-[#5a7a9c] mb-6 max-w-sm mx-auto">
          Tu información fue enviada por WhatsApp. Si la ventana no se abrió, haz clic abajo para reenviar.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`https://wa.me/528115115660?text=${encodeURIComponent(`Hola, solicité una cotización de ${form.servicio}. Mi nombre es ${form.nombre}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-widest px-6 py-3 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Abrir WhatsApp
          </a>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm({ nombre: "", empresa: "", email: "", telefono: "", servicio: "", material: "", espesor: "", cantidad: "", mensaje: "" });
            }}
            className="inline-flex items-center justify-center gap-2 border border-gray-200 text-[#5a7a9c] hover:text-[#1B4375] hover:border-[#1B4375] font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-widest px-6 py-3 transition-colors"
          >
            Nueva solicitud
          </button>
        </div>
      </div>
    );
  }

  const inputBase = "w-full px-4 py-3 border font-[family-name:var(--font-inter)] text-sm text-[#1B4375] placeholder:text-gray-400 focus:outline-none focus:border-[#FF7F00] transition-colors";
  const errorBorder = "border-red-400 bg-red-50";
  const normalBorder = "border-gray-200";

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200 p-6 lg:p-8 space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        {/* Nombre */}
        <div>
          <label className="block font-[family-name:var(--font-inter)] text-xs font-medium text-[#1B4375] uppercase tracking-wider mb-1.5">
            Nombre completo <span className="text-[#FF7F00]">*</span>
          </label>
          <input
            type="text"
            value={form.nombre}
            onChange={(e) => handleChange("nombre", e.target.value)}
            placeholder="Tu nombre"
            className={`${inputBase} ${errors.nombre ? errorBorder : normalBorder}`}
          />
        </div>

        {/* Empresa */}
        <div>
          <label className="block font-[family-name:var(--font-inter)] text-xs font-medium text-[#1B4375] uppercase tracking-wider mb-1.5">
            Empresa
          </label>
          <input
            type="text"
            value={form.empresa}
            onChange={(e) => handleChange("empresa", e.target.value)}
            placeholder="Nombre de tu empresa (opcional)"
            className={`${inputBase} ${normalBorder}`}
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-[family-name:var(--font-inter)] text-xs font-medium text-[#1B4375] uppercase tracking-wider mb-1.5">
            Correo electrónico <span className="text-[#FF7F00]">*</span>
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="tu@email.com"
            className={`${inputBase} ${errors.email ? errorBorder : normalBorder}`}
          />
        </div>

        {/* Teléfono */}
        <div>
          <label className="block font-[family-name:var(--font-inter)] text-xs font-medium text-[#1B4375] uppercase tracking-wider mb-1.5">
            Teléfono <span className="text-[#FF7F00]">*</span>
          </label>
          <input
            type="tel"
            value={form.telefono}
            onChange={(e) => handleChange("telefono", e.target.value)}
            placeholder="Ej. 81 1234 5678"
            className={`${inputBase} ${errors.telefono ? errorBorder : normalBorder}`}
          />
        </div>
      </div>

      {/* Servicio */}
      <div>
        <label className="block font-[family-name:var(--font-inter)] text-xs font-medium text-[#1B4375] uppercase tracking-wider mb-1.5">
          Servicio de interés <span className="text-[#FF7F00]">*</span>
        </label>
        <select
          value={form.servicio}
          onChange={(e) => handleChange("servicio", e.target.value)}
          className={`${inputBase} ${errors.servicio ? errorBorder : normalBorder} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%235a7a9c%22%20stroke-width%3D%222%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center]`}
        >
          <option value="">Selecciona un servicio</option>
          {servicios.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Material / Espesor / Cantidad */}
      <div className="grid md:grid-cols-3 gap-5">
        <div>
          <label className="block font-[family-name:var(--font-inter)] text-xs font-medium text-[#1B4375] uppercase tracking-wider mb-1.5">
            Material
          </label>
          <input
            type="text"
            value={form.material}
            onChange={(e) => handleChange("material", e.target.value)}
            placeholder="Ej. Acero al carbón"
            className={`${inputBase} ${normalBorder}`}
          />
        </div>
        <div>
          <label className="block font-[family-name:var(--font-inter)] text-xs font-medium text-[#1B4375] uppercase tracking-wider mb-1.5">
            Espesor
          </label>
          <input
            type="text"
            value={form.espesor}
            onChange={(e) => handleChange("espesor", e.target.value)}
            placeholder="Ej. 3/16&quot;, 6mm"
            className={`${inputBase} ${normalBorder}`}
          />
        </div>
        <div>
          <label className="block font-[family-name:var(--font-inter)] text-xs font-medium text-[#1B4375] uppercase tracking-wider mb-1.5">
            Cantidad
          </label>
          <input
            type="text"
            value={form.cantidad}
            onChange={(e) => handleChange("cantidad", e.target.value)}
            placeholder="Ej. 500 piezas"
            className={`${inputBase} ${normalBorder}`}
          />
        </div>
      </div>

      {/* Mensaje */}
      <div>
        <label className="block font-[family-name:var(--font-inter)] text-xs font-medium text-[#1B4375] uppercase tracking-wider mb-1.5">
          Detalles del proyecto
        </label>
        <textarea
          value={form.mensaje}
          onChange={(e) => handleChange("mensaje", e.target.value)}
          placeholder="Describe tu pieza, dimensiones, acabado, plano adjunto, etc."
          rows={4}
          className={`${inputBase} ${normalBorder} resize-none`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#FF7F00] hover:bg-[#CC6600] text-white font-[family-name:var(--font-barlow)] text-base font-bold uppercase tracking-widest px-10 py-4 transition-colors duration-200"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Enviar cotización por WhatsApp
      </button>

      <p className="font-[family-name:var(--font-inter)] text-[11px] text-[#5a7a9c]">
        Al enviar, serás redirigido a WhatsApp con tu información pre-cargada. Tu información no se almacena en servidores.
      </p>
    </form>
  );
}
