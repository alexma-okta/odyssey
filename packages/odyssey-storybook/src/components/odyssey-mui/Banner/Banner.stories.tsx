/*!
 * Copyright (c) 2021-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import { Banner, BannerProps } from "@okta/odyssey-react-mui";
import { ComponentMeta, Meta, Story } from "@storybook/react";

import { MuiThemeDecorator } from "../../../../.storybook/components";
import BannerMdx from "./Banner.mdx";

const storybookMeta: ComponentMeta<typeof Banner> = {
  title: `MUI Components/Alerts/Banner`,
  component: Banner,
  parameters: {
    docs: {
      page: BannerMdx,
    },
  },
  argTypes: {
    linkText: {
      control: "text",
    },
    linkUrl: {
      control: "text",
    },
    onClose: {
      control: "text",
    },
    role: {
      control: "radio",
      options: ["status", undefined],
    },
    severity: {
      control: "radio",
      options: ["error", "info", "warning"],
      defaultValue: "info",
    },
    text: {
      control: "text",
      defaultValue: "The mission to Sagitarius A has been set for January 7.",
    },
  },
  decorators: [MuiThemeDecorator],
};

export default storybookMeta;

const Template: Story<BannerProps> = (args) => {
  return <Banner {...args}></Banner>;
};

export const Info = Template.bind({});
Info.args = {};

export const Error = Template.bind({});
Error.args = {
  content: "Hangar 18 has been compromised.",
  role: "status",
  severity: "error",
};

export const Warning = Template.bind({});
Warning.args = {
  content: "Severe solar winds detected. Local system flights may be delayed.",
  role: "status",
  severity: "warning",
};

export const WithLink = Template.bind({});
WithLink.args = {
  content: "Hangar 18 has been compromised.",
  linkUrl: "#anchor",
  linkText: "View report",
  role: "status",
  severity: "error",
};

export const Dismissible = Template.bind({});
Dismissible.args = {
  onClose: `{() => {}}`,
  severity: "warning",
  role: "status",
};
