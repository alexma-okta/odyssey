/*!
 * Copyright (c) 2023-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import {
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
  InputBase,
} from "@mui/material";
import { memo, useCallback } from "react";

import { Field } from "./Field";

export type AutocompleteProps<OptionType> = {
  isDisabled?: boolean;
  hint?: string;
  label: string;
  onChange?: MuiAutocompleteProps<OptionType, undefined, undefined, undefined>;
  options: OptionType[];
  value?: OptionType | null;
};

// <TextField
//   {...params}
//   endAdornment={params.InputProps.endAdornment}
//   hint={hint}
//   label={label}
//   ref={params.InputProps.ref}
//   startAdornment={params.InputProps.startAdornment}
// />

const Autocomplete = <OptionType,>({
  isDisabled,
  hint,
  label,
  onChange,
  options,
  value,
}: AutocompleteProps<OptionType>) => {
  const renderInput = useCallback(
    (params) => (
      <Field
        hasVisibleLabel
        hint={hint}
        // id={params.InputLabelProps.id} // Pretty sure this is unnecessary -Kevin
        label={label}
        renderFieldComponent={({ ariaDescribedBy, id }) => (
          <InputBase
            {...params}
            {...params.InputProps}
            aria-describedby={ariaDescribedBy}
            id={id}
          />
        )}
      />
    ),
    [hint, label]
  );

  return (
    <MuiAutocomplete
      disabled={isDisabled}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      /* @ts-ignore TEMP */ // PLEASE REMOVE once we figure out the correct type.
      onChange={onChange}
      options={options}
      renderInput={renderInput}
      value={value}
    />
  );
};

const MemoizedAutocomplete = memo(Autocomplete);

export { MemoizedAutocomplete as Autocomplete };
