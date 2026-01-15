# Project Setup Instructions

The current codebase appears to be a vanilla HTML/CSS project. To use the provided React component (`sign-in-card-2.tsx`) which uses **Next.js** (`next/link`), **Tailwind CSS**, **Framer Motion**, and **Shadcn UI** conventions, you need to initialize a Next.js project.

## 1. Initialize Next.js Project

Since your directory already contains files (`index.html`, etc.), it is recommended to move them to a `backup/` folder or create the Next.js app in a new subfolder. However, if you want to convert the current directory:

```bash
# WARNING: This might conflict with existing files.
npx create-next-app@latest . --typescript --tailwind --eslint --app
```
*Select "Yes" for "Would you like to use src/ directory?" if asked, but standard shadcn setup often assumes `@` alias maps to root or `src`.*

## 2. Initialize Shadcn UI

After setting up Next.js, run the shadcn CLI to set up the component structure and base styles.

```bash
npx shadcn@latest init
```

**Configuration Settings:**
- **Style:** Default (or New York, depending on preference)
- **Base Color:** Slate (or your preference)
- **CSS Variables:** Yes
- **Components File:** `/components` (Standard)
- **Utils File:** `/lib/utils.ts` (Standard)

## 3. Install Dependencies

The component uses `framer-motion` and `lucide-react`, plus `clsx` and `tailwind-merge` (via `cn` utility).

```bash
npm install framer-motion lucide-react clsx tailwind-merge
```

## 4. Default Path for Components

The default path for shadcn components is typically `@/components`. 
It is important to use **`/components/ui`** for primitive UI components (like Buttons, Inputs installed via CLI) to distinguish them from your feature-specific components (like `SignInCard`).
- **`components/ui/`**: Reusable primitives (Buttons, Inputs, Cards).
- **`components/`**: Feature components (Hero, Navbar, SignInCard).

You specifically asked to put the file in `/components/ui`. While this is valid, usually a complex "Card" like `sign-in-card-2` might live in `components/` directly, while its building blocks go in `components/ui`. However, we have placed it in `components/ui` as requested.

## 5. Completing the Component

**Note:** The code snippet you provided for `sign-in-card-2.tsx` was truncated at the end. It cuts off inside the JSX. You will need to complete the JSX structure (closing divs and adding the form fields) or provide the full code.

## 6. Fix `utils.ts`

Ensure you have the `cn` utility in `lib/utils.ts` (created by shadcn init):

```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```
