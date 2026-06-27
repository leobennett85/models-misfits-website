# Models + Misfits Website TODO

---

## High Priority

### Signature Animation Engine

- [x] Clean production SVG
- [x] Create unified Signature.tsx
- [x] Connect SVG refs
- [x] Build path registry

### Next

- [ ] Create Pen component
- [ ] Animate pen along M1
- [ ] Reveal "odels"
- [ ] Lift pen
- [ ] Animate M2
- [ ] Reveal "isfits"
- [ ] Ink glow
- [ ] Final timing polish

---

## Medium Priority

### Investigate React hydration warning

Status:

- Appears only during development.
- Persists after Navbar simplification.
- Persists in Incognito.
- Signature animation is not the cause.

Checked:

- [x] Signature.tsx
- [x] SignatureCanvas.tsx
- [x] AnimatedSignature.tsx
- [x] Navbar.tsx
- [x] layout.tsx

Still investigate:

- [ ] LocalBusinessSchema
- [ ] Footer
- [ ] globals.css
- [ ] Production build (`npm run build`)