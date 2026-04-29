# SMILE Optall Vision - SEO Programático

Sitio web optimizado para SEO de la clínica SMILE de Optall Vision.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Content:** MDX (preparado, no usado aún)
- **SEO:** Schema.org (MedicalBusiness, Physician, FAQPage, LocalBusiness)
- **Hosting:** Vercel (configurado para smile.optallvision.com)

## Estructura del Sitio

```
/                           → Home: SMILE en CDMX
/precio-smile-cdmx          → Pilar transaccional (precios)
/smile-vs-lasik             → Pilar informacional (comparativa)
/zona-sur/smile-pedregal    → Geo: Pedregal (#1 ranking ✅)
/zona-sur/smile-coyoacan    → Geo: Coyoacán (prioridad 🔴)
```

## Desarrollo Local

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build
npm run build

# Preview del build
npm run start
```

## Estructura de Archivos

```
src/
├── app/
│   ├── layout.tsx              # Layout global con Header/Footer
│   ├── page.tsx                # Home
│   ├── globals.css             # Estilos globales
│   ├── sitemap.ts              # Sitemap dinámico
│   ├── robots.ts               # Robots.txt dinámico
│   ├── precio-smile-cdmx/
│   │   └── page.tsx
│   ├── smile-vs-lasik/
│   │   └── page.tsx
│   └── zona-sur/
│       ├── smile-pedregal/
│       │   └── page.tsx
│       └── smile-coyoacan/
│           └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── seo/
│   │   ├── JsonLd.tsx          # Componentes Schema.org
│   │   └── Metadata.tsx        # Generador de metadata
│   └── ui/
│       ├── CTAButton.tsx
│       ├── FAQAccordion.tsx
│       └── StatCard.tsx
├── content/                    # Para MDX (futuro)
│   ├── blog/
│   └── zonas/
└── lib/
    └── constants.ts            # Datos del negocio centralizados
```

## Configuración SEO

### Schema.org Implementado

- **MedicalBusinessSchema:** Información de la clínica
- **PhysicianSchema:** Perfil del Dr. César Sánchez Galeana
- **MedicalWebPageSchema:** Páginas de contenido médico
- **FAQPageSchema:** Preguntas frecuentes estructuradas
- **ServiceSchema:** Servicios con precios
- **LocalBusinessSchema:** Páginas geolocalizadas
- **BreadcrumbSchema:** Navegación estructurada

### Datos Centralizados

Todos los datos del negocio están en `src/lib/constants.ts`:

- Precios
- Información del doctor
- Dirección y contacto
- Horarios
- Zonas geográficas

## Deploy a Vercel

1. Conectar repo a Vercel
2. Configurar dominio: `smile.optallvision.com`
3. Variables de entorno (si aplica)
4. Deploy automático en push

## Próximos Pasos (Fase 3+)

- [ ] Agregar imágenes reales (doctor, clínica, equipo)
- [ ] Integrar Google Maps embed
- [ ] Crear más páginas geo (Tlalpan, San Ángel, Santa Fe)
- [ ] Blog con artículos MDX
- [ ] Formulario de contacto
- [ ] Tracking (GA4, conversiones)
- [ ] Google Search Console

## Contacto

**Optall Vision**
- 📍 Periférico Sur 3332, Piso 11, Jardines del Pedregal
- 📞 55 4916 8798
- 💬 [WhatsApp](https://wa.me/525549168798)

<!-- Updated 2026-04-28 -->
