import { html, TemplateResult } from 'lit';
import '../src/plot-braider.js';

export default {
  title: 'PlotBraider',
  component: 'plot-braider',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ header, backgroundColor = 'white' }: ArgTypes) => html`
  <plot-braider style="--plot-braider-background-color: ${backgroundColor}" .header=${header}></plot-braider>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
