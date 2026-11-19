export interface AccordionContent {
  title: string;
  text: string;
}

export interface AccordionItem {
  id: number;
  title: string;
  content: AccordionContent[];
}

export interface AccordionProps {
  items: AccordionItem[];
}