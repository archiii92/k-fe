import * as React from 'react';
import { Section } from './Section';

interface AccordionProps { title: string; }

export class Accordion extends React.Component<AccordionProps> {
  render() {
    return (
      <>
        <div className="title">{this.props.title}</div>
        <Section title="Исходные данные">
          Выберите файл с данными
        </Section>
        <Section title="Нейронная сеть">
          Выберите тип нейронной сети
        </Section>
        <Section title="Алгоритм оптимизации">
          Выберите алгоритм оптимизации
        </Section>
      </>
    );
  }
}
