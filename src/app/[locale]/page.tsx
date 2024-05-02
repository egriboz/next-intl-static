import { unstable_setRequestLocale } from "next-intl/server";

import { useTranslations } from "next-intl";
interface Props {
  params: {
    locale: string;
  };
}
export default function Index({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Index");
  return <h1>{t("title")}</h1>;
}
