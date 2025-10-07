// app/accommodation/page.tsx
import type { Metadata } from 'next'
import {JSX} from "react";
import {AccommodationClient} from "@/app/accommodation/accomodation-client";

export const metadata: Metadata = {
  title: 'Наши дома',
}

const Page = (): JSX.Element => {
  return <AccommodationClient />
}

export default Page

