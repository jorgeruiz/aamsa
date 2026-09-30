"use client";

import { createContext, useContext, useState, useCallback, ReactNode, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

/* ─── Context ─── */
const WhatsAppModalContext = createContext<{
  openWhatsAppModal: () => void;
}>({ openWhatsAppModal: () => {} });

export function useWhatsAppModal() {
  return useContext(WhatsAppModalContext);
}

/* ─── Provider + Modal ─── */
export function WhatsAppModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsAppModal = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <WhatsAppModalContext.Provider value={{ openWhatsAppModal }}>
      {children}
      <AnimatePresence>
        {isOpen && <WhatsAppFormModal onClose={close} />}
      </AnimatePresence>
    </WhatsAppModalContext.Provider>
  );
}

/* ─── Modal Component ─── */
function WhatsAppFormModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const servicios = [
    "Corte Láser CNC",
    "Corte Plasma CNC",
    "Doblez CNC",
    "Corte Guillotina",
    "Corte Pantógrafo",
    "Rolado",
    "Compra de acero",
    "Otro",
  ];

  function validate() {
    const e: Record<string, boolean> = {};
    if (!form.nombre.trim()) e.nombre = true;
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

    // Build WhatsApp message
    const lines = [
      `Hola, me gustaría solicitar una cotización.`,
      ``,
      `*Nombre:* ${form.nombre.trim()}`,
      form.empresa.trim() ? `*Empresa:* ${form.empresa.trim()}` : "",
      `*Teléfono:* ${form.telefono.trim()}`,
      `*Servicio:* ${form.servicio}`,
      form.mensaje.trim() ? `*Detalles:* ${form.mensaje.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const encoded = encodeURIComponent(lines);
    const waUrl = `https://wa.me/528115115660?text=${encoded}`;

    // GTM event
    pushGTMEvent("whatsapp_form_submit", {
      form_location: "whatsapp_modal",
      servicio: form.servicio,
    });

    window.open(waUrl, "_blank", "noopener,noreferrer");
    onClose();
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

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
        className="relative bg-white w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        {/* Header */}
        <div className="bg-[#1B4375] px-6 py-5 flex items-center justify-between">
          <div>
            <h3 className="font-[family-name:var(--font-barlow)] text-lg font-bold uppercase tracking-wide text-white">
              Solicitar Cotización
            </h3>
            <p className="font-[family-name:var(--font-inter)] text-xs text-[#B0C4DE] mt-0.5">
              Completa tus datos y te contactamos por WhatsApp
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors p-1"
            aria-label="Cerrar formulario"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Nombre */}
          <div>
            <label className="block font-[family-name:var(--font-inter)] text-xs font-medium text-[#1B4375] uppercase tracking-wider mb-1.5">
              Nombre <span className="text-[#FF7F00]">*</span>
            </label>
            <input
              type="text"
              value={form.nombre}
              onChange={(e) => handleChange("nombre", e.target.value)}
              placeholder="Tu nombre completo"
              className={`w-full px-4 py-3 border ${errors.nombre ? "border-red-400 bg-red-50" : "border-gray-200"} font-[family-name:var(--font-inter)] text-sm text-[#1B4375] placeholder:text-gray-400 focus:outline-none focus:border-[#FF7F00] transition-colors`}
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
              className="w-full px-4 py-3 border border-gray-200 font-[family-name:var(--font-inter)] text-sm text-[#1B4375] placeholder:text-gray-400 focus:outline-none focus:border-[#FF7F00] transition-colors"
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
              className={`w-full px-4 py-3 border ${errors.telefono ? "border-red-400 bg-red-50" : "border-gray-200"} font-[family-name:var(--font-inter)] text-sm text-[#1B4375] placeholder:text-gray-400 focus:outline-none focus:border-[#FF7F00] transition-colors`}
            />
          </div>

          {/* Servicio */}
          <div>
            <label className="block font-[family-name:var(--font-inter)] text-xs font-medium text-[#1B4375] uppercase tracking-wider mb-1.5">
              Servicio de interés <span className="text-[#FF7F00]">*</span>
            </label>
            <select
              value={form.servicio}
              onChange={(e) => handleChange("servicio", e.target.value)}
              className={`w-full px-4 py-3 border ${errors.servicio ? "border-red-400 bg-red-50" : "border-gray-200"} font-[family-name:var(--font-inter)] text-sm text-[#1B4375] focus:outline-none focus:border-[#FF7F00] transition-colors appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%235a7a9c%22%20stroke-width%3D%222%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center]`}
            >
              <option value="">Selecciona un servicio</option>
              {servicios.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Mensaje */}
          <div>
            <label className="block font-[family-name:var(--font-inter)] text-xs font-medium text-[#1B4375] uppercase tracking-wider mb-1.5">
              Detalles del proyecto
            </label>
            <textarea
              value={form.mensaje}
              onChange={(e) => handleChange("mensaje", e.target.value)}
              placeholder="Describe brevemente tu pieza, material, espesor, cantidad..."
              rows={3}
              className="w-full px-4 py-3 border border-gray-200 font-[family-name:var(--font-inter)] text-sm text-[#1B4375] placeholder:text-gray-400 focus:outline-none focus:border-[#FF7F00] transition-colors resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1DA851] text-white font-[family-name:var(--font-barlow)] text-base font-bold uppercase tracking-widest px-6 py-4 transition-colors duration-200"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Enviar por WhatsApp
          </button>

          <p className="font-[family-name:var(--font-inter)] text-[11px] text-[#5a7a9c] text-center">
            Al enviar, serás redirigido a WhatsApp con tu información pre-cargada.
          </p>
        </form>
      </motion.div>
    </div>
  );
}
