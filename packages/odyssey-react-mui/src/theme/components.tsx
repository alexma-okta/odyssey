/*!
 * Copyright (c) 2022-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import { ThemeOptions } from "@mui/material";
import type {} from "@mui/lab/themeAugmentation";
import { alertTitleClasses } from "@mui/material/AlertTitle";
import { autocompleteClasses } from "@mui/material/Autocomplete";
import { buttonClasses } from "@mui/material/Button";
import { checkboxClasses } from "@mui/material/Checkbox";
import { chipClasses } from "@mui/material/Chip";
import { dividerClasses } from "@mui/material/Divider";
import { formControlLabelClasses } from "@mui/material/FormControlLabel";
import { formLabelClasses } from "@mui/material/FormLabel";
import { inputAdornmentClasses } from "@mui/material/InputAdornment";
import { inputBaseClasses } from "@mui/material/InputBase";
import { listItemIconClasses } from "@mui/material/ListItemIcon";
import { listItemTextClasses } from "@mui/material/ListItemText";
import { menuItemClasses } from "@mui/material/MenuItem";
import { radioClasses } from "@mui/material/Radio";
import { stackClasses } from "@mui/material/Stack";
import { svgIconClasses } from "@mui/material/SvgIcon";
import { tableBodyClasses } from "@mui/material/TableBody";
import { tableCellClasses } from "@mui/material/TableCell";
import { tableHeadClasses } from "@mui/material/TableHead";
import { tableRowClasses } from "@mui/material/TableRow";
import { tableSortLabelClasses } from "@mui/material/TableSortLabel";
import { tooltipClasses } from "@mui/material/Tooltip";
import { typographyClasses } from "@mui/material/Typography";

import {
  ArrowDownIcon,
  CheckCircleFilledIcon,
  CheckIcon,
  ChevronDownIcon,
  CloseCircleFilledIcon,
  CloseIcon,
  DangerDiamondFilledIcon,
  InformationCircleFilledIcon,
  SubtractIcon,
  WarningFilledIcon,
} from "../icons.generated";
import { DesignTokens } from "./theme";
import { CSSProperties } from "react";

export const components = (
  odysseyTokens: DesignTokens
): ThemeOptions["components"] => {
  return {
    MuiAlert: {
      defaultProps: {
        iconMapping: {
          error: <DangerDiamondFilledIcon />,
          info: <InformationCircleFilledIcon />,
          success: <CheckCircleFilledIcon />,
          warning: <WarningFilledIcon />,
        },
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          padding: odysseyTokens.Spacing4,
          gap: odysseyTokens.Spacing4,
          color: odysseyTokens.TypographyColorBody,
          border: 0,

          // Severity color variation
          ...(ownerState.severity === "success" && {
            backgroundColor: odysseyTokens.HueGreen100,

            ...(ownerState.variant === "toast" && {
              backgroundColor: odysseyTokens.HueGreen100.concat(
                odysseyTokens.PaletteAlphaSemi
              ),
            }),
          }),
          ...(ownerState.severity === "info" && {
            backgroundColor: odysseyTokens.HueBlue100,

            ...(ownerState.variant === "toast" && {
              backgroundColor: odysseyTokens.HueBlue100.concat(
                odysseyTokens.PaletteAlphaSemi
              ),
            }),
          }),
          ...(ownerState.severity === "error" && {
            backgroundColor: odysseyTokens.HueRed100,

            ...(ownerState.variant === "toast" && {
              backgroundColor: odysseyTokens.HueRed100.concat(
                odysseyTokens.PaletteAlphaSemi
              ),
            }),
          }),
          ...(ownerState.severity === "warning" && {
            backgroundColor: odysseyTokens.HueYellow100,

            ...(ownerState.variant === "toast" && {
              backgroundColor: odysseyTokens.HueYellow100.concat(
                odysseyTokens.PaletteAlphaSemi
              ),
            }),
          }),

          // Alert title variation
          [`& .${alertTitleClasses.root}`]: {
            ...(ownerState.severity === "success" && {
              color: odysseyTokens.PaletteSuccessHeading,
            }),
            ...(ownerState.severity === "info" && {
              color: odysseyTokens.PalettePrimaryHeading,
            }),
            ...(ownerState.severity === "error" && {
              color: odysseyTokens.PaletteDangerHeading,
            }),
            ...(ownerState.severity === "warning" && {
              color: odysseyTokens.PaletteWarningHeading,
            }),
            ...(ownerState.variant === "banner" && {
              marginBlockEnd: 0,
            }),
          },

          // Alert variant styling
          ...(ownerState.variant === "banner" && {
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 0,

            ...(ownerState.onClose !== undefined && {
              paddingInline: odysseyTokens.Spacing6,
            }),
          }),
          ...(ownerState.variant === "callout" && {
            borderRadius: odysseyTokens.BorderRadiusMain,
            "&:not(:last-child)": {
              marginBottom: odysseyTokens.Spacing6,
            },
          }),
          ...(ownerState.variant === "toast" && {
            maxWidth: odysseyTokens.TypographyLineLengthMax,
            borderRadius: odysseyTokens.BorderRadiusOuter,
            position: "relative",
            alignItems: "center",
            backdropFilter: "blur(10px)",
          }),
        }),
        action: ({ ownerState }) => ({
          ...(ownerState.variant === "banner" && {
            padding: 0,
            marginInlineEnd: 0,
            insetBlockStart: "50%",
            insetInlineEnd: odysseyTokens.Spacing2,
            position: "absolute",
            transform: "translateY(-50%)",
          }),
          ...(ownerState.variant === "toast" && {
            padding: 0,
            marginInlineStart: 0,
            marginInlineEnd: 0,
          }),
        }),
        icon: ({ ownerState }) => ({
          marginInlineEnd: 0,
          padding: 0,
          height: `calc(${odysseyTokens.TypographySizeHeading6} * ${odysseyTokens.TypographyLineHeightHeading6})`,
          opacity: 1,
          ...(ownerState.severity === "info" && {
            color: odysseyTokens.PalettePrimaryMain,
          }),
          ...(ownerState.severity === "error" && {
            color: odysseyTokens.PaletteDangerMain,
          }),
          ...(ownerState.severity === "success" && {
            color: odysseyTokens.PaletteSuccessMain,
          }),
          ...(ownerState.severity === "warning" && {
            color: odysseyTokens.PaletteWarningDark,
          }),

          [`& .${svgIconClasses.root}`]: {
            alignSelf: "center",
            fontSize: odysseyTokens.TypographySizeHeading6,
          },
        }),
        message: ({ ownerState }) => ({
          padding: 0,
          overflow: "visible",
          ...(ownerState.variant === "banner" && {
            display: "flex",
            justifyContent: "space-between",
            gap: odysseyTokens.Spacing4,
          }),
          ...(ownerState.variant === "toast" && {
            flexGrow: 1,
          }),
        }),
      },
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          marginBlockStart: 0,
          marginBlockEnd: odysseyTokens.Spacing2,
          lineHeight: odysseyTokens.TypographyLineHeightHeading6,
          fontSize: odysseyTokens.TypographySizeHeading6,
          fontWeight: odysseyTokens.TypographyWeightHeading,
          fontFamily: odysseyTokens.TypographyFamilyHeading,

          [`&:last-child`]: {
            marginBlockEnd: 0,
          },
        },
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        autoHighlight: true,
        autoSelect: false,
        blurOnSelect: false,
        clearIcon: <CloseIcon />,
        clearOnEscape: true,
        disableClearable: false,
        disabledItemsFocusable: false,
        disableListWrap: false,
        disablePortal: false,
        filterSelectedOptions: false,
        fullWidth: false,
        handleHomeEndKeys: true,
        includeInputInList: true,
        limitTags: -1,
        openOnFocus: false,
        popupIcon: <ChevronDownIcon />,
        selectOnFocus: true,
      },
      styleOverrides: {
        clearIndicator: {
          marginRight: "unset",
          padding: odysseyTokens.Spacing1,
        },
        endAdornment: ({ ownerState }) => ({
          display: "flex",
          gap: odysseyTokens.Spacing1,
          top: "unset",
          right: "unset",
          insetBlockStart: odysseyTokens.Spacing2,
          insetInlineEnd: odysseyTokens.Spacing2,
          maxHeight: "unset",
          alignItems: "center",
          whiteSpace: "nowrap",
          color: odysseyTokens.TypographyColorSubordinate,

          ...(ownerState.disabled === true && {
            display: "none",
          }),

          ...(ownerState.readOnly === true && {
            display: "none",
          }),
        }),
        listbox: {
          paddingBlock: odysseyTokens.Spacing2,
          paddingInline: odysseyTokens.Spacing2,
          borderRadius: odysseyTokens.BorderRadiusMain,

          [`& .${autocompleteClasses.option}`]: {
            minHeight: "unset",
            paddingBlock: odysseyTokens.Spacing3,
            paddingInline: odysseyTokens.Spacing4,
            borderRadius: odysseyTokens.BorderRadiusTight,

            [`&:hover`]: {
              backgroundColor: odysseyTokens.HueNeutral100,
            },

            [`&.${autocompleteClasses.focused}`]: {
              backgroundColor: odysseyTokens.HueNeutral100,
            },

            [`&[aria-selected="true"]`]: {
              backgroundColor: "transparent",
              color: odysseyTokens.TypographyColorAction,

              [`&:hover`]: {
                backgroundColor: odysseyTokens.PalettePrimaryLighter,
              },

              [`&.${autocompleteClasses.focused}`]: {
                backgroundColor: odysseyTokens.PalettePrimaryLighter,
              },
            },
          },
        },
        loading: {
          paddingBlock: odysseyTokens.Spacing3,
          paddingInline: odysseyTokens.Spacing4,
        },
        popupIndicator: {
          padding: odysseyTokens.Spacing1,
          marginRight: "unset",
        },
        inputRoot: ({ ownerState }) => ({
          ...(ownerState.readOnly === true && {
            backgroundColor: odysseyTokens.HueNeutral50,

            [`&:not(:hover)`]: {
              borderColor: "transparent",
            },
          }),
        }),
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          backgroundColor: "rgba(29,29,33,0.75)",

          ...(ownerState.invisible === true && {
            backgroundColor: "transparent",
          }),
        }),
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "primary",
        disableElevation: true,
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          minWidth: "unset",
          paddingBlock: odysseyTokens.Spacing3,
          paddingInline: odysseyTokens.Spacing4,
          display: "inline-flex",
          position: "relative",
          marginBlock: "0",
          marginInline: "0",
          transitionProperty:
            "color, background-color, border-color, box-shadow",
          transitionDuration: "100ms",
          transitionTimingFunction: "linear",
          borderWidth: odysseyTokens.BorderWidthMain,
          borderStyle: odysseyTokens.BorderStyleMain,
          borderRadius: odysseyTokens.BorderRadiusMain,
          borderColor: "transparent",
          fontSize: odysseyTokens.TypographySizeBody,
          fontWeight: odysseyTokens.TypographyWeightBodyBold,
          fontFamily: odysseyTokens.TypographyFamilyButton,
          lineHeight: odysseyTokens.TypographyLineHeightUi,
          whiteSpace: "nowrap",

          [`.${buttonClasses.root} + &`]: {
            marginInlineStart: odysseyTokens.Spacing2,
          },

          "&:focus-visible": {
            boxShadow: `0 0 0 2px ${odysseyTokens.HueNeutralWhite}, 0 0 0 4px ${odysseyTokens.PalettePrimaryMain}`,
            outline: "2px solid transparent",
            outlineOffset: "1px",
          },

          "&:disabled": {
            pointerEvents: "none",
          },

          [`.${buttonClasses.startIcon}, .${buttonClasses.endIcon}`]: {
            "& > *:nth-of-type(1)": {
              fontSize: `${odysseyTokens.TypographyLineHeightUi}em`,
            },
          },

          ...(ownerState.variant === "primary" && {
            color: odysseyTokens.HueNeutralWhite,
            backgroundColor: odysseyTokens.PalettePrimaryMain,

            "&:hover": {
              backgroundColor: odysseyTokens.PalettePrimaryDark,
            },

            "&:active": {
              backgroundColor: odysseyTokens.PalettePrimaryDarker,
            },

            "&:disabled": {
              color: odysseyTokens.PalettePrimaryLight,
              backgroundColor: odysseyTokens.HueBlue100,
            },
          }),

          ...(ownerState.variant === "secondary" && {
            backgroundColor: odysseyTokens.HueBlue100,
            color: odysseyTokens.PalettePrimaryDark,

            "&:hover": {
              backgroundColor: odysseyTokens.HueBlue200,
              color: odysseyTokens.HueBlue800,
            },

            "&:active": {
              backgroundColor: odysseyTokens.PalettePrimaryLight,
              color: odysseyTokens.HueBlue800,
            },

            "&:disabled": {
              backgroundColor: odysseyTokens.HueNeutral100,
              color: odysseyTokens.TypographyColorDisabled,
            },
          }),

          ...(ownerState.variant === "tertiary" && {
            backgroundColor: odysseyTokens.HueNeutral100,
            color: odysseyTokens.HueNeutral700,

            "&:hover": {
              backgroundColor: odysseyTokens.HueNeutral200,
              color: odysseyTokens.HueNeutral800,
            },

            "&:active": {
              backgroundColor: odysseyTokens.HueNeutral300,
              color: odysseyTokens.HueNeutral800,
            },

            "&:disabled": {
              backgroundColor: odysseyTokens.HueNeutral100,
              color: odysseyTokens.TypographyColorDisabled,
            },
          }),

          ...(ownerState.variant === "danger" && {
            backgroundColor: odysseyTokens.PaletteDangerMain,
            color: odysseyTokens.HueNeutralWhite,

            "&:hover": {
              backgroundColor: odysseyTokens.PaletteDangerDark,
            },

            "&:focus-visible": {
              boxShadow: `0 0 0 2px ${odysseyTokens.HueNeutralWhite}, 0 0 0 4px ${odysseyTokens.PaletteDangerMain}`,
            },

            "&:active": {
              backgroundColor: odysseyTokens.PaletteDangerDarker,
            },

            "&:disabled": {
              color: odysseyTokens.PaletteDangerLight,
              backgroundColor: odysseyTokens.HueRed100,
            },
          }),
          ...(ownerState.variant === "floating" && {
            backgroundColor: "transparent",
            color: odysseyTokens.TypographyColorBody,

            "&:hover": {
              backgroundColor: odysseyTokens.HueNeutral100,
            },

            "&:active": {
              backgroundColor: odysseyTokens.HueNeutral200,
            },

            "&:disabled": {
              backgroundColor: "transparent",
              color: odysseyTokens.TypographyColorDisabled,
            },
          }),
          ...(ownerState.size === "small" && {
            paddingBlock: odysseyTokens.Spacing2,
            paddingInline: odysseyTokens.Spacing3,
            fontSize: odysseyTokens.TypographySizeBody,
          }),
          ...(ownerState.size === "large" && {
            paddingBlock: odysseyTokens.Spacing4,
            paddingInline: odysseyTokens.Spacing4,
          }),
          ...(ownerState.fullWidth === true && {
            display: "block",
            width: "100%",
            marginBlock: "0",
            marginInline: "0",

            "&:not(:last-child)": {
              marginBlockEnd: odysseyTokens.Spacing4,
            },
          }),
          ...(ownerState.children === "" && {
            minWidth: "auto",
            padding: odysseyTokens.Spacing3,

            [`.${buttonClasses.endIcon}, .${buttonClasses.startIcon}`]: {
              margin: "0",
            },

            ...(ownerState.size === "small" && {
              padding: odysseyTokens.Spacing2,
            }),
          }),
        }),

        endIcon: ({ ownerState }) => ({
          display: "inline-flex",
          margin: 0,
          marginInlineStart: odysseyTokens.Spacing2,

          ...(ownerState.children === undefined && {
            marginInlineStart: 0,
          }),
        }),

        startIcon: ({ ownerState }) => ({
          display: "inline-flex",
          margin: 0,
          marginInlineEnd: odysseyTokens.Spacing2,

          ...(ownerState.children === undefined && {
            marginInlineEnd: 0,
          }),
        }),
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCheckbox: {
      defaultProps: {
        size: "small",
        icon: <></>,
        checkedIcon: <CheckIcon />,
        indeterminateIcon: <SubtractIcon />,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          width: `${odysseyTokens.TypographyLineHeightUi}em`,
          height: `${odysseyTokens.TypographyLineHeightUi}em`,
          borderRadius: odysseyTokens.BorderRadiusTight,
          borderWidth: odysseyTokens.BorderWidthMain,
          borderStyle: odysseyTokens.BorderStyleMain,
          borderColor: odysseyTokens.HueNeutral500,
          padding: 0,
          boxShadow: `0 0 0 0 transparent`,
          transition: theme.transitions.create(
            ["border-color", "background-color", "box-shadow"],
            {
              duration: odysseyTokens.TransitionDurationMain,
            }
          ),

          [`.${svgIconClasses.root}`]: {
            color: odysseyTokens.HueNeutralWhite,
            transition: theme.transitions.create(["color"], {
              duration: odysseyTokens.TransitionDurationMain,
            }),
          },

          "&.Mui-checked": {
            backgroundColor: odysseyTokens.PalettePrimaryMain,
            borderColor: odysseyTokens.PalettePrimaryMain,

            [`.${formControlLabelClasses.root}:hover > &`]: {
              backgroundColor: odysseyTokens.PalettePrimaryDark,
              borderColor: odysseyTokens.PalettePrimaryDark,
            },
          },

          [`.${formControlLabelClasses.root}:hover > &`]: {
            backgroundColor: "transparent",
            borderColor: odysseyTokens.HueNeutral900,
          },
          ".Mui-error:not(.Mui-valid):hover > &": {
            borderColor: odysseyTokens.BorderColorDangerDark,

            "&.Mui-checked": {
              backgroundColor: odysseyTokens.PaletteDangerDark,
              borderColor: odysseyTokens.BorderColorDangerDark,
            },
          },
          ".Mui-error:not(.Mui-valid) > &": {
            borderColor: odysseyTokens.BorderColorDangerControl,

            "&.Mui-checked": {
              backgroundColor: odysseyTokens.PaletteDangerMain,
              borderColor: odysseyTokens.BorderColorDangerControl,
            },

            "&.Mui-focusVisible": {
              boxShadow: `0 0 0 2px ${odysseyTokens.HueNeutralWhite}, 0 0 0 4px ${odysseyTokens.PaletteDangerMain}`,
            },
          },
          "&.Mui-focusVisible": {
            borderColor: odysseyTokens.HueNeutral900,
            boxShadow: `0 0 0 2px ${odysseyTokens.HueNeutralWhite}, 0 0 0 4px ${odysseyTokens.PalettePrimaryMain}`,
            outline: "2px solid transparent",
            outlineOffset: "1px",
          },
          "&.Mui-disabled": {
            backgroundColor: odysseyTokens.HueNeutral50,
            borderColor: odysseyTokens.HueNeutral300,

            ".Mui-error:not(.Mui-valid) > &": {
              backgroundColor: odysseyTokens.HueNeutral50,
              borderColor: odysseyTokens.HueNeutral300,
            },

            [`.${svgIconClasses.root}`]: {
              color: odysseyTokens.HueNeutral900,
            },
          },
        }),
      },
    },
    MuiChip: {
      defaultProps: {
        deleteIcon: <CloseCircleFilledIcon />,
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          height: "auto",
          paddingBlock: `calc(${odysseyTokens.Spacing2} - ${odysseyTokens.BorderWidthMain})`,
          paddingInline: odysseyTokens.Spacing3,
          fontSize: odysseyTokens.TypographySizeBody,
          lineHeight: odysseyTokens.TypographyLineHeightUi,
          borderRadius: odysseyTokens.BorderRadiusRound,
          backgroundColor: odysseyTokens.HueNeutral100,
          borderWidth: odysseyTokens.BorderWidthMain,
          borderColor: odysseyTokens.HueNeutral200,
          borderStyle: odysseyTokens.BorderStyleMain,
          color: odysseyTokens.HueNeutral700,

          ...(ownerState.onDelete && {
            paddingInlineEnd: odysseyTokens.Spacing2,
          }),

          [`&.${chipClasses.disabled}`]: {
            opacity: 1,
            pointerEvents: "none",
            backgroundColor: odysseyTokens.HueNeutral50,
            color: odysseyTokens.TypographyColorDisabled,
          },

          ...(ownerState.clickable && {
            "&:hover": {
              backgroundColor: odysseyTokens.HueNeutral200,
            },
            [`&.${chipClasses.focusVisible}`]: {
              backgroundColor: odysseyTokens.HueNeutral200,
              outlineColor: odysseyTokens.FocusOutlineColorPrimary,
              outlineOffset: odysseyTokens.FocusOutlineOffsetTight,
              outlineStyle: odysseyTokens.FocusOutlineStyle,
              outlineWidth: odysseyTokens.FocusOutlineWidthMain,
            },
            "&:active": {
              boxShadow: "none",
              backgroundColor: odysseyTokens.HueNeutral300,
            },
          }),

          [`& .${chipClasses.icon}`]: {
            margin: 0,
            marginInlineEnd: odysseyTokens.Spacing1,
          },

          ...(ownerState.variant === "lamp" && {
            paddingBlock: 0,
            paddingInline: 0,
            borderRadius: 0,
            border: 0,
            backgroundColor: "transparent",
            color: odysseyTokens.TypographyColorBody,

            "&::before": {
              content: "''",
              width: ".64em",
              height: ".64em",
              marginInlineEnd: odysseyTokens.Spacing2,
              borderRadius: "100%",
              backgroundColor: "transparent",
              borderColor: odysseyTokens.TypographyColorBody,
              borderWidth: odysseyTokens.BorderWidthHeavy,
              borderStyle: odysseyTokens.BorderStyleMain,
            },

            [`&.${chipClasses.colorError}`]: {
              "&::before": {
                border: 0,
                backgroundColor: odysseyTokens.PaletteDangerMain,
              },
            },

            [`&.${chipClasses.colorSuccess}`]: {
              "&::before": {
                border: 0,
                backgroundColor: odysseyTokens.PaletteSuccessMain,
              },
            },

            [`&.${chipClasses.colorWarning}`]: {
              "&::before": {
                border: 0,
                backgroundColor: odysseyTokens.HueYellow200,
              },
            },
          }),

          ...(ownerState.variant === "pill" && {
            paddingBlock: odysseyTokens.Spacing1,
            paddingInline: odysseyTokens.Spacing2,
            borderRadius: odysseyTokens.BorderRadiusMain,
            border: 0,
            fontWeight: odysseyTokens.TypographyWeightHeadingBold,
            lineHeight: odysseyTokens.TypographyLineHeightOverline,
            backgroundColor: odysseyTokens.HueNeutral50,
            color: odysseyTokens.TypographyColorSubordinate,
            fontSize: odysseyTokens.TypographySizeSubordinate,

            "&::before": {
              content: "''",
              width: ".64em",
              height: ".64em",
              marginInlineEnd: odysseyTokens.Spacing1,
              borderRadius: "100%",
              backgroundColor: odysseyTokens.HueNeutral600,
            },

            [`&.${chipClasses.colorError}`]: {
              backgroundColor: odysseyTokens.PaletteDangerLighter,
              color: odysseyTokens.TypographyColorDanger,

              "&::before": {
                backgroundColor: odysseyTokens.PaletteDangerMain,
              },
            },

            [`&.${chipClasses.colorSuccess}`]: {
              backgroundColor: odysseyTokens.PaletteSuccessLighter,
              color: odysseyTokens.TypographyColorSuccess,

              "&::before": {
                backgroundColor: odysseyTokens.PaletteSuccessMain,
              },
            },

            [`&.${chipClasses.colorWarning}`]: {
              backgroundColor: odysseyTokens.PaletteWarningLighter,
              color: odysseyTokens.TypographyColorWarning,

              "&::before": {
                backgroundColor: odysseyTokens.HueYellow200,
              },
            },
          }),

          [`.${inputBaseClasses.root}.${inputBaseClasses.disabled} &`]: {
            backgroundColor: odysseyTokens.HueNeutral200,
          },
        }),

        label: {
          padding: 0,
        },

        deleteIcon: {
          WebkitTapHighlightColor: "transparent",
          color: odysseyTokens.HueNeutral500,
          fontSize: "1em",
          cursor: "pointer",
          margin: "0",
          marginInlineStart: odysseyTokens.Spacing2,

          "&:hover": {
            color: odysseyTokens.HueNeutral600,
          },

          [`.${inputBaseClasses.root}.${inputBaseClasses.disabled} &`]: {
            display: "none",
          },
        },
      },
    },
    MuiCircularProgress: {
      defaultProps: {
        size: odysseyTokens.TypographyScale2,
        thickness: 8,
        color: "primary",
        disableShrink: false,
        variant: "indeterminate",
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.color !== "inherit" && {
            color: odysseyTokens.PalettePrimaryDark,
          }),
        }),
        circle: ({ ownerState }) => ({
          ...(ownerState.variant === "indeterminate" && {
            strokeDasharray: "160%, 360%",
          }),
        }),
      },
    },
    MuiCssBaseline: {
      styleOverrides: (themeParam) => `
      html {
        font-size: calc((${themeParam.typography.fontSize} / 16) * 100%);
      }
    `,
    },
    MuiScopedCssBaseline: {
      styleOverrides: {
        root: {
          abbr: {
            borderBottomWidth: odysseyTokens.BorderWidthMain,
            borderBottomStyle: "dashed", // Token?
            borderBottomColor: odysseyTokens.HueNeutral700,
            textDecoration: "none",
          },

          address: {
            maxWidth: odysseyTokens.TypographyLineLengthMax,
            marginBlockStart: 0,
            marginBlockEnd: odysseyTokens.Spacing4,
            marginInline: 0,
            fontStyle: "normal",

            "&:last-child": {
              marginBlockEnd: 0,
            },
          },

          blockquote: {
            maxWidth: odysseyTokens.TypographyLineLengthMax,
            marginBlockStart: 0,
            marginBlockEnd: odysseyTokens.Spacing4,
            marginInline: 0,
            paddingBlock: 0,
            paddingInlineStart: odysseyTokens.Spacing4,
            paddingInlineEnd: 0,
            borderInlineStartWidth: "3px", // Token?
            borderInlineStartStyle: odysseyTokens.BorderStyleMain,
            borderInlineStartColor: odysseyTokens.HueNeutral200,

            "&:last-child": {
              marginBlockEnd: 0,
            },
          },

          cite: {
            fontStyle: "normal",
          },

          code: {
            fontFamily: odysseyTokens.TypographyFamilyMono,
            display: "inline-block",
            minWidth: `calc(${odysseyTokens.TypographySizeSubordinate} * ${odysseyTokens.TypographyLineHeightHeading5})`,
            borderStyle: odysseyTokens.BorderStyleMain,
            borderWidth: odysseyTokens.BorderWidthMain,
            borderRadius: odysseyTokens.BorderRadiusTight,
            borderColor: odysseyTokens.BorderColorDisplay,
            backgroundColor: odysseyTokens.HueNeutral50,
            padding: `calc(${odysseyTokens.Spacing1} / 2) ${odysseyTokens.Spacing1}`,
            fontSize: odysseyTokens.TypographySizeSubordinate,
            lineHeight: odysseyTokens.TypographyLineHeightHeading5,
          },

          del: {
            display: "inline-block",
            backgroundColor: odysseyTokens.PaletteDangerHighlight,

            "&::before, &::after": {
              clip: "rect(0 0 0 0)",
              clipPath: "inset(50%)",
              height: "1px",
              overflow: "hidden",
              position: "absolute",
              whiteSpace: "nowrap",
              width: "1px",
            },

            "&::before": {
              content: "attr(data-a11y-start)",
            },

            "&::after": {
              content: "attr(data-a11y-end)",
            },
          },

          details: {
            fontSize: odysseyTokens.TypographySizeBody,
          },

          dfn: {
            fontStyle: "italic",
          },

          dl: {
            display: "grid",
            gridGap: `${odysseyTokens.Spacing2} ${odysseyTokens.Spacing4}`,
            gridTemplateColumns: "repeat(2, minmax(min-content, max-content))",
            maxWidth: odysseyTokens.TypographyLineLengthMax,
            marginBlockStart: 0,
            marginBlockEnd: odysseyTokens.Spacing4,
            marginInline: 0,
            padding: 0,

            "&:last-child": {
              marginBlockEnd: 0,
            },

            dt: {
              gridColumn: 1,
              fontWeight: odysseyTokens.TypographyWeightBodyBold,
            },

            dd: {
              gridColumn: 2,
              marginInlineStart: odysseyTokens.Spacing0,
              fontWeight: 400,
            },
          },

          em: {
            fontStyle: "italic",

            "& > em": {
              textDecoration: "underline",
            },
          },

          figure: {
            display: "grid",
            gridGap: odysseyTokens.Spacing2,
            gridTemplateColumns: "minmax(min-content, max-content)",
            justifyContent: "start",
            justifyItems: "start",
            marginBlockStart: 0,
            marginBlockEnd: odysseyTokens.Spacing4,
            marginInline: 0,

            "&:last-child": {
              marginBlockEnd: 0,
            },
          },

          "figcaption:not([class])": {
            color: odysseyTokens.TypographyColorSubordinate,
            fontSize: odysseyTokens.TypographySizeSubordinate,
          },

          hr: {
            marginBlock: odysseyTokens.Spacing2,
            marginInline: 0,
            borderWidth: odysseyTokens.BorderWidthMain,
            borderStyle: odysseyTokens.BorderStyleMain,
            borderColor: odysseyTokens.HueNeutral200,
          },

          ins: {
            display: "inline-block",
            backgroundColor: odysseyTokens.PaletteSuccessHighlight,

            "&::before, &::after": {
              clip: "rect(0 0 0 0)",
              clipPath: "inset(50%)",
              height: "1px",
              overflow: "hidden",
              position: "absolute",
              whiteSpace: "nowrap",
              width: "1px",
            },

            "&::before": {
              content: "attr(data-a11y-start)",
            },

            "&::after": {
              content: "attr(data-a11y-end)",
            },
          },

          kbd: {
            display: "inline-block",
            minWidth: `calc(${odysseyTokens.TypographySizeSubordinate} * ${odysseyTokens.TypographyLineHeightHeading5})`,
            borderStyle: odysseyTokens.BorderStyleMain,
            borderWidth: odysseyTokens.BorderWidthMain,
            borderRadius: odysseyTokens.BorderRadiusMain,
            borderColor: odysseyTokens.HueNeutral200,
            backgroundColor: odysseyTokens.HueNeutral50,
            padding: `calc(${odysseyTokens.Spacing1} / 2) ${odysseyTokens.Spacing1}`,
            fontFamily:
              "'Inconsolata', 'SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', 'Courier', monospace",
            fontSize: odysseyTokens.TypographySizeSubordinate,
            fontWeight: odysseyTokens.Spacing5,
            lineHeight: odysseyTokens.TypographyLineHeightHeading5,
            boxShadow: `0 1px 1px 0 hsla(240, 6%, 12%, 0.05)`,
          },

          mark: {
            backgroundColor: odysseyTokens.PaletteWarningHighlight,

            "&::before, &::after": {
              clip: "rect(0 0 0 0)",
              clipPath: "inset(50%)",
              height: "1px",
              overflow: "hidden",
              position: "absolute",
              whiteSpace: "nowrap",
              width: "1px",
            },

            "&::before": {
              content: "attr(data-a11y-start)",
            },

            "&::after": {
              content: "attr(data-a11y-end)",
            },
          },

          "p:not([class])": {
            maxWidth: odysseyTokens.TypographyLineLengthMax,
            marginBlockStart: 0,
            marginBlockEnd: odysseyTokens.Spacing4, // Token?

            "&:last-child": {
              marginBlockEnd: 0,
            },
          },

          pre: {
            marginInline: 0,
            marginBlockStart: 0,
            marginBlockEnd: odysseyTokens.Spacing4,
            fontFamily: odysseyTokens.TypographyFamilyMono,
            whiteSpace: "pre-wrap",
            tabSize: 2,

            "&:last-child": {
              marginBlockEnd: 0,
            },
          },

          ul: {
            [`&.${stackClasses.root}`]: {
              padding: 0,
              margin: 0,
            },
          },

          "ul:not([class]), ol:not([class])": {
            maxWidth: odysseyTokens.TypographyLineLengthMax,
            marginBlockStart: 0,
            marginBlockEnd: odysseyTokens.Spacing4,
            // Unique padding to get desire appearance with "outside" position
            paddingInlineStart: "2ch",

            ol: {
              listStyleType: "lower-alpha",

              ol: {
                listStyleType: "lower-roman",
              },
            },

            "&:last-child": {
              marginBlockEnd: 0,
            },
          },

          "li:not([class])": {
            marginBlockEnd: odysseyTokens.Spacing2,
            paddingInlineStart: odysseyTokens.Spacing1,

            "ul, ol": {
              marginBlockStart: odysseyTokens.Spacing2,
              marginInlineStart: `calc(${odysseyTokens.Spacing6} - 2ch)`,
            },
          },

          q: {
            quotes: `'"' '"' "'" "'"`,

            "&::before": {
              content: "open-quote",
            },

            "&::after": {
              content: "close-quote",
            },
          },

          s: {
            textDecoration: "line-through",
          },

          samp: {
            padding: "0 0.5ch",
            backgroundColor: odysseyTokens.HueNeutral100,
            boxShadow: `0 1px 0 ${odysseyTokens.HueNeutral50}`,
            fontSize: odysseyTokens.TypographySizeBody,

            kbd: {
              background: odysseyTokens.HueNeutralWhite,
            },
          },

          small: {
            fontSize: odysseyTokens.TypographySizeSubordinate,
          },

          strong: {
            fontWeight: odysseyTokens.TypographyWeightBodyBold,
          },

          sub: {
            fontSize: odysseyTokens.TypographySizeSubordinate,
            lineHeight: 1,
            verticalAlign: "sub",
          },

          summary: {
            marginBlockEnd: odysseyTokens.Spacing2,
            fontSize: odysseyTokens.TypographySizeBody,
            fontWeight: odysseyTokens.TypographyWeightBodyBold,
            cursor: "default",

            "&:focus-visible": {
              outlineColor: odysseyTokens.FocusOutlineColorPrimary,
              outlineOffset: odysseyTokens.FocusOutlineOffsetMain,
              outlineStyle: odysseyTokens.FocusOutlineStyle,
              outlineWidth: odysseyTokens.FocusOutlineWidthMain,
            },
          },

          sup: {
            fontSize: odysseyTokens.TypographySizeSubordinate,
            lineHeight: 1,
            verticalAlign: "super",
          },

          var: {
            fontStyle: "italic",
            fontWeight: odysseyTokens.TypographyWeightBodyBold,
          },
        },
      },
    },
    MuiDialog: {
      defaultProps: {
        scroll: "paper",
      },
      styleOverrides: {
        paper: {
          maxWidth: `calc(${odysseyTokens.TypographyLineLengthMax} + (${odysseyTokens.Spacing6} * 2))`,
          borderRadius: odysseyTokens.BorderRadiusOuter,
          boxShadow: "none",
          filter:
            "drop-shadow(0px 1px 4px rgba(29, 29, 33, 0.08)) drop-shadow(0px 4px 10px rgba(29, 29, 33, 0.08)) drop-shadow(0px 8px 30px rgba(29, 29, 33, 0.1))",
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          flexWrap: "wrap",
          gap: odysseyTokens.Spacing2,
          paddingBlockStart: odysseyTokens.Spacing5,
          paddingBlockEnd: odysseyTokens.Spacing5,
          paddingInline: odysseyTokens.Spacing6,

          "& > .${ buttonClasses.root }": {
            margin: "0 !important",
          },
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          paddingBlock: 0,
          paddingInline: odysseyTokens.Spacing6,

          ...(ownerState.dividers === true && {
            paddingBlock: odysseyTokens.Spacing6,
            color: odysseyTokens.HueNeutral600,
          }),

          ["&:last-child"]: {
            paddingBlockEnd: odysseyTokens.Spacing6,
          },
        }),
      },
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: {
          marginBlockEnd: odysseyTokens.Spacing5,
          color: odysseyTokens.HueNeutral700,

          "&:last-child": {
            marginBlockEnd: "0",
          },
        },
      },
    },
    MuiDialogTitle: {
      defaultProps: {
        component: "h1",
        variant: "h5",
      },
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBlockEnd: 0,
          padding: 0,
          paddingBlockStart: odysseyTokens.Spacing5,
          paddingBlockEnd: odysseyTokens.Spacing4,
          paddingInline: odysseyTokens.Spacing6,
          fontFamily: odysseyTokens.TypographyFamilyHeading,

          [`.${buttonClasses.root}`]: {
            // Pull close button by inline padding amount
            marginInlineEnd: `-${odysseyTokens.Spacing3}`,
          },
        },
      },
    },
    MuiFormControl: {
      defaultProps: {
        margin: "normal",
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          width: "100%",
          maxWidth: odysseyTokens.TypographyLineLengthMax,
          ...(ownerState.margin === "normal" && {
            marginTop: 0,
            marginBottom: odysseyTokens.Spacing4,
            "&:last-child": {
              marginBottom: 0,
            },
          }),
          ...(ownerState.margin === "dense" && {
            marginTop: 0,
            marginBottom: odysseyTokens.Spacing5,
            "&:last-child": {
              marginBottom: 0,
            },
          }),
          ...(ownerState.fullWidth && {
            maxWidth: "100%",
          }),
        }),
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          gap: odysseyTokens.Spacing2,
          marginInlineStart: 0,
          marginInlineEnd: 0, // used for row presentation of radio/checkbox
          ...(ownerState.labelPlacement === "start" && {
            marginInlineStart: 0, // used for row presentation of radio/checkbox
            marginInlineEnd: 0,
          }),
          ...(ownerState.labelPlacement === "top" && {
            marginInlineStart: 0,
          }),
          ...(ownerState.labelPlacement === "bottom" && {
            marginInlineStart: 0,
          }),
          "&:not(:last-child)": {
            marginBottom: odysseyTokens.Spacing2,
          },
          "&.Mui-disabled": {
            pointerEvents: "none",
          },
          [`&:hover .${radioClasses.root}, &:hover .${checkboxClasses.root}`]: {
            color: odysseyTokens.TypographyColorBody,
          },
          [`&:hover .${radioClasses.root}.Mui-checked, &:hover .${checkboxClasses.root}.Mui-checked`]:
            {
              color: odysseyTokens.PalettePrimaryDark,
            },
          [`&.Mui-error:hover .${radioClasses.root}, &.Mui-error:hover .${checkboxClasses.root}`]:
            {
              color: odysseyTokens.PaletteDangerDark,
            },
          [`&.Mui-error:hover .${radioClasses.root}.Mui-checked, &.Mui-error:hover .${checkboxClasses.root}.Mui-checked`]:
            {
              color: odysseyTokens.PaletteDangerDark,
            },
        }),
        label: {
          gap: odysseyTokens.Spacing1,
        },
        asterisk: () => ({
          display: "none",
        }),
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        variant: "standard",
      },
      styleOverrides: {
        root: {
          fontSize: odysseyTokens.TypographySizeSubordinate,
          lineHeight: odysseyTokens.TypographyLineHeightBody,
          marginBlockStart: odysseyTokens.Spacing2,
          [`.${formLabelClasses.root} + &`]: {
            marginBlockStart: `-${odysseyTokens.Spacing1}`,
            color: odysseyTokens.TypographyColorSubordinate,
          },
          marginBlockEnd: odysseyTokens.Spacing2,
          "&:last-child": {
            marginBlockEnd: 0,
          },
          textAlign: "start",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          alignItems: "center",
          color: odysseyTokens.TypographyColorBody,
          display: "inline-flex",
          lineHeight: odysseyTokens.TypographyLineHeightUi,
          fontSize: odysseyTokens.TypographySizeBody,
          fontWeight: odysseyTokens.TypographyWeightBodyBold,
          marginBottom: odysseyTokens.Spacing2,
          "&.Mui-focused, &.Mui-error, &.Mui-disabled": {
            color: odysseyTokens.TypographyColorBody,
          },
          "& > .MuiTypography-root": {
            margin: "reset",
            marginInlineStart: odysseyTokens.Spacing1,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: odysseyTokens.Spacing1,
        },
      },
    },
    MuiInput: {
      defaultProps: {
        disableUnderline: true,
      },
      styleOverrides: {
        root: {
          "label + &": {
            marginTop: 0,
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          display: "flex",
          minWidth: "1.25em",
          maxHeight: "unset",
          margin: 0,
          alignItems: "center",
          whiteSpace: "nowrap",
          color: odysseyTokens.TypographyColorSubordinate,
          ...(ownerState.position === "start" && {
            marginInlineStart: odysseyTokens.Spacing2,
          }),
          ...(ownerState.position === "end" && {
            marginInlineEnd: odysseyTokens.Spacing2,
          }),
          ...(ownerState.disablePointerEvents === true && {
            pointerEvents: "none",
          }),
        }),
      },
    },
    MuiInputBase: {
      defaultProps: {
        minRows: 3,
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...theme.typography.body1,
          flex: "1",
          width: "auto",
          color: odysseyTokens.TypographyColorBody,
          lineHeight: odysseyTokens.TypographyLineHeightUi,
          borderWidth: odysseyTokens.BorderWidthMain,
          borderStyle: odysseyTokens.BorderStyleMain,
          borderRadius: odysseyTokens.BorderRadiusMain,
          borderColor: odysseyTokens.HueNeutral500,
          boxShadow: `0 0 0 0 transparent`,
          backgroundColor: odysseyTokens.HueNeutralWhite,
          transition: theme.transitions.create(
            ["border-color", "background-color", "box-shadow"],
            {
              duration: odysseyTokens.TransitionDurationMain,
            }
          ),

          ...(ownerState.fullWidth && {
            width: "100%",
          }),

          ...(ownerState.readOnly === true && {
            borderColor: "transparent",
            backgroundColor: odysseyTokens.HueNeutral50,
          }),

          [`&:hover`]: {
            borderColor: odysseyTokens.HueNeutral900,
          },

          [`&.${inputBaseClasses.focused}`]: {
            borderColor: odysseyTokens.FocusOutlineColorPrimary,
            boxShadow: `0 0 0 1px ${odysseyTokens.FocusOutlineColorPrimary}`,
            outline: `${odysseyTokens.FocusOutlineWidthMain} ${odysseyTokens.FocusOutlineStyle} transparent`,
            outlineOffset: odysseyTokens.FocusOutlineOffsetTight,
          },

          [`&.${inputBaseClasses.error}`]: {
            borderColor: odysseyTokens.BorderColorDangerControl,
          },

          [`&.${inputBaseClasses.error}:hover`]: {
            borderColor: odysseyTokens.BorderColorDangerDark,
          },

          [`&.${inputBaseClasses.error}.${inputBaseClasses.focused}`]: {
            borderColor: odysseyTokens.BorderColorDangerControl,
            boxShadow: `0 0 0 1px ${odysseyTokens.PaletteDangerMain}`,
          },

          [`&.${inputBaseClasses.disabled}`]: {
            color: odysseyTokens.TypographyColorDisabled,
            borderColor: odysseyTokens.BorderColorDisabled,
            pointerEvents: "auto",
            backgroundColor: odysseyTokens.HueNeutral50,
            cursor: "not-allowed",
          },
        }),
        input: {
          boxSizing: "border-box",
          height: "auto",
          paddingBlock: odysseyTokens.Spacing3,
          paddingInline: odysseyTokens.Spacing3,
          boxShadow: "none",

          [`.${inputBaseClasses.disabled} &`]: {
            pointerEvents: "auto",
            cursor: "not-allowed",
          },

          [`.${inputAdornmentClasses.root} + &`]: {
            paddingInlineStart: odysseyTokens.Spacing2,
          },

          [`label[data-shrink=false] + .${inputBaseClasses.formControl} &`]: {
            "&::placeholder": {
              color: odysseyTokens.TypographyColorSubordinate,
              opacity: "1 !important",
            },
          },

          [`&::-webkit-search-cancel-button`]: {
            display: "none",
            MozAppearance: "none",
            WebkitAppearance: "none",
          } satisfies CSSProperties,

          [`&::-moz-search-cancel-button`]: {
            display: "none",
            MozAppearance: "none",
          } satisfies CSSProperties,

          [`&::-ms-clear`]: {
            display: "none",
          },
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        disableAnimation: true,
        shrink: false,
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          display: "flex",
          justifyContent: "space-between",
          overflow: "unset",
          whiteSpace: "unset",
          // @ts-expect-error: Incorrect typing in MUI
          ...(ownerState.formControl && {
            position: "initial",
            transform: "none",
          }),
          ...(ownerState.variant === "outlined" && {
            pointerEvents: "initial",
            transform: "none",
            maxWidth: "100%",
            ...(ownerState.size === "small" && {
              transform: "none",
            }),
          }),
          [`& > .${typographyClasses.root}`]: {
            lineHeight: "unset",
          },
        }),
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: odysseyTokens.TypographyColorAction,
          textDecoration: "underline",
          cursor: "pointer",

          "&:visited": {
            color: odysseyTokens.TypographyColorAction,
          },

          "&:hover": {
            color: odysseyTokens.PalettePrimaryDark,
            textDecoration: "underline",
          },

          "&:focus-visible": {
            borderRadius: odysseyTokens.BorderRadiusMain,
            outlineColor: odysseyTokens.FocusOutlineColorPrimary,
            outlineOffset: odysseyTokens.FocusOutlineOffsetMain,
            outlineStyle: odysseyTokens.FocusOutlineStyle,
            outlineWidth: odysseyTokens.FocusOutlineWidthTight,
            textDecoration: "none",
          },

          ".Link-indicator, .Link-icon": {
            display: "inline-block",
            height: "1em",
            lineHeight: 1,
          },

          ".Link-indicator": {
            marginInlineStart: odysseyTokens.Spacing2,
          },

          ".Link-icon": {
            marginInlineEnd: odysseyTokens.Spacing2,
          },
          svg: {
            fontSize: "1em",
            height: "1em",
            position: "relative",
            insetBlockStart: "-0.0625em",
            verticalAlign: "middle",
            width: "1em",
          },
        },
      },
      variants: [
        {
          props: { variant: "monochrome" },
          style: {
            color: odysseyTokens.TypographyColorBody,
            textDecoration: "underline",

            "&:visited": {
              color: odysseyTokens.TypographyColorBody,
            },

            "&:hover": {
              color: odysseyTokens.TypographyColorSubordinate,
            },
          },
        },
      ],
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          textAlign: "start",
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          paddingBlock: odysseyTokens.Spacing2,
          paddingInline: odysseyTokens.Spacing4,
          fontSize: odysseyTokens.TypographySizeSubordinate,
          fontWeight: odysseyTokens.TypographyWeightBodyBold,
          lineHeight: odysseyTokens.TypographyLineHeightUi,
          color: odysseyTokens.TypographyColorSubordinate,
          textTransform: "uppercase",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        list: {
          paddingBlock: odysseyTokens.Spacing2,
          paddingInline: odysseyTokens.Spacing2,
          borderRadius: odysseyTokens.BorderRadiusMain,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          gap: odysseyTokens.Spacing2,
          minHeight: "unset",
          paddingBlock: odysseyTokens.Spacing3,
          paddingInline: odysseyTokens.Spacing4,
          borderRadius: odysseyTokens.BorderRadiusTight,

          [`& .${formControlLabelClasses.root}`]: {
            gap: "unset",
          },

          "&:hover": {
            textDecoration: "none",
            backgroundColor: odysseyTokens.HueNeutral100,

            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
              backgroundColor: "transparent",
            },
          },

          [`:focus-visible`]: {
            backgroundColor: odysseyTokens.HueNeutral100,
          },

          [`&.${menuItemClasses.root}-destructive`]: {
            color: odysseyTokens.TypographyColorDanger,
          },

          [`&.${menuItemClasses.selected}`]: {
            backgroundColor: "transparent",
            color: odysseyTokens.TypographyColorAction,

            "&:hover": {
              backgroundColor: odysseyTokens.PalettePrimaryLighter,

              "@media (hover: none)": {
                backgroundColor: odysseyTokens.PalettePrimaryLighter,
              },
            },
          },

          ...(!ownerState.disableGutters && {
            paddingInline: odysseyTokens.Spacing4,
          }),

          ...(ownerState.divider && {
            borderBlockEnd: `1px solid ${odysseyTokens.BorderColorDisplay}`,
          }),

          [`&.${menuItemClasses.disabled}`]: {
            opacity: 1,
            color: odysseyTokens.TypographyColorDisabled,
          },

          [`& + .${dividerClasses.root}`]: {
            marginBlock: odysseyTokens.Spacing1,
          },

          [`& .${listItemTextClasses.root}`]: {
            marginBlock: 0,
          },

          [`& .${listItemIconClasses.root}`]: {
            minWidth: "unset",
          },
        }),
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "unset",
          color: "inherit",
        },
      },
    },
    MuiNativeSelect: {
      defaultProps: {
        variant: "standard",
      },
      styleOverrides: {
        select: {
          "&:focus": {
            backgroundColor: "transparent",
          },
        },
        icon: {
          right: "unset",
          insetInlineEnd: odysseyTokens.Spacing3,
          color: odysseyTokens.TypographyColorBody,
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          marginBlockStart: odysseyTokens.Spacing1,
          borderWidth: odysseyTokens.BorderWidthMain,
          borderStyle: odysseyTokens.BorderStyleMain,
          borderColor: odysseyTokens.HueNeutral200,
        },
      },
    },
    MuiRadio: {
      defaultProps: {
        size: "small",
        icon: <></>,
        checkedIcon: <></>,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          width: `${odysseyTokens.TypographyLineHeightUi}em`,
          height: `${odysseyTokens.TypographyLineHeightUi}em`,
          borderRadius: `${odysseyTokens.TypographyLineHeightUi}em`,
          borderWidth: odysseyTokens.BorderWidthMain,
          borderStyle: odysseyTokens.BorderStyleMain,
          borderColor: odysseyTokens.HueNeutral500,
          padding: 0,
          boxShadow: `0 0 0 0 transparent`,
          transition: theme.transitions.create(
            ["border-color", "background-color", "box-shadow"],
            {
              duration: odysseyTokens.TransitionDurationMain,
            }
          ),

          "&::before": {
            content: "''",
            position: "absolute",
            width: "0.5em",
            height: "0.5em",
            borderRadius: "50%",
            backgroundColor: "transparent",
            transition: theme.transitions.create(["background-color"], {
              duration: odysseyTokens.TransitionDurationMain,
            }),
          },

          [`.${formControlLabelClasses.root}:hover > &`]: {
            backgroundColor: "transparent",
            borderColor: odysseyTokens.HueNeutral900,
          },
          ".Mui-error:hover > &": {
            backgroundColor: "transparent",
            borderColor: odysseyTokens.BorderColorDangerDark,
            "&::before": {
              backgroundColor: odysseyTokens.PaletteDangerDark,
            },
          },
          ".Mui-error > &": {
            borderColor: odysseyTokens.BorderColorDangerControl,

            "&.Mui-focusVisible": {
              boxShadow: `0 0 0 2px ${odysseyTokens.HueNeutralWhite}, 0 0 0 4px ${odysseyTokens.PaletteDangerMain}`,
            },
          },
          "&.Mui-focusVisible": {
            borderColor: odysseyTokens.HueNeutral900,
            boxShadow: `0 0 0 2px ${odysseyTokens.HueNeutralWhite}, 0 0 0 4px ${odysseyTokens.PalettePrimaryMain}`,
            outline: "2px solid transparent",
            outlineOffset: "1px",
          },
          "&.Mui-checked": {
            position: "relative",

            "&::before": {
              backgroundColor: odysseyTokens.PalettePrimaryMain,
            },
          },
          ".Mui-error > &.Mui-checked::before": {
            backgroundColor: odysseyTokens.PaletteDangerMain,
          },
          "&.Mui-disabled": {
            backgroundColor: odysseyTokens.HueNeutral50,
            borderColor: odysseyTokens.HueNeutral300,

            "&.Mui-checked::before": {
              backgroundColor: odysseyTokens.HueNeutral300,
            },
          },
        }),
      },
    },
    MuiSnackbar: {
      defaultProps: {
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right",
        },
      },
      styleOverrides: {
        root: {
          "&.Toast": {
            position: "static",
          },
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        variant: "standard",
        IconComponent: ChevronDownIcon,
      },
      styleOverrides: {
        select: {
          paddingBlock: odysseyTokens.Spacing3,
          paddingInline: odysseyTokens.Spacing3,

          "&:focus": {
            backgroundColor: "transparent",
          },

          ".MuiBox-root": {
            display: "flex",
            flexWrap: "wrap",
            gap: odysseyTokens.Spacing1,
            marginBlock: `-${odysseyTokens.Spacing2}`,
            marginInline: `-${odysseyTokens.Spacing2}`,
          },
        },
        icon: {
          right: "unset",
          insetInlineEnd: odysseyTokens.Spacing3,
          color: odysseyTokens.TypographyColorBody,
        },
      },
    },
    MuiSvgIcon: {
      defaultProps: {
        fontSize: "inherit",
        color: "inherit",
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          fontSize: `${odysseyTokens.TypographyLineHeightUi}rem`,

          ...(ownerState.fontSize === "small" && {
            fontSize: `${
              Number(odysseyTokens.TypographyLineHeightUi) * 0.75
            }rem`,
          }),

          ...(ownerState.fontSize === "large" && {
            fontSize: `${
              Number(odysseyTokens.TypographyLineHeightUi) * 1.25
            }rem`,
          }),
        }),
      },
    },
    MuiTab: {
      defaultProps: {
        iconPosition: "start",
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          maxWidth: `calc(${odysseyTokens.TypographyLineLengthMax} / 2)`,
          minWidth: "unset",
          minHeight: "unset",
          padding: `${odysseyTokens.Spacing4} 0`,
          fontFamily: odysseyTokens.TypographyFamilyHeading,
          lineHeight: odysseyTokens.TypographyLineHeightUi,
          overflow: "visible",

          ...(ownerState.textColor === "inherit" && {
            color: "inherit",
            opacity: 1,
          }),

          ...(ownerState.selected == true && {
            color: odysseyTokens.TypographyColorAction,
            fontWeight: odysseyTokens.TypographyWeightBodyBold,
          }),

          ...(ownerState.disabled && {
            color: odysseyTokens.TypographyColorDisabled,
          }),

          ...(ownerState.wrapped && {
            fontSize: odysseyTokens.TypographySizeSubordinate,
            lineHeight: odysseyTokens.TypographyLineHeightBody,
          }),

          "&:hover": {
            color: odysseyTokens.TypographyColorAction,
          },

          "&:focus-visible::before, &.Mui-focusVisible::before": {
            content: "''",
            position: "absolute",
            insetBlockStart: odysseyTokens.Spacing4,
            insetInlineEnd: `calc(-1 * ${odysseyTokens.Spacing2})`,
            insetBlockEnd: odysseyTokens.Spacing4,
            insetInlineStart: `calc(-1 * ${odysseyTokens.Spacing2})`,
            borderWidth: odysseyTokens.BorderWidthMain,
            borderStyle: odysseyTokens.BorderStyleMain,
            borderColor: odysseyTokens.PalettePrimaryMain,
            borderRadius: odysseyTokens.BorderRadiusMain,
          },

          "& .MuiTab-iconWrapper": {
            marginInlineEnd: odysseyTokens.Spacing1,
          },
        }),
      },
    },
    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          display: "table",
          width: "auto",
          borderCollapse: "separate",
          borderSpacing: 0,
          border: `${odysseyTokens.BorderWidthMain} ${odysseyTokens.BorderStyleMain} ${odysseyTokens.HueNeutral100}`,
          borderRadius: odysseyTokens.BorderRadiusMain,
          marginBlock: odysseyTokens.Spacing0,
          marginInline: odysseyTokens.Spacing0,
          lineHeight: odysseyTokens.TypographyLineHeightUi,

          "&:only-child": {
            marginBlockEnd: 0,
          },

          ...(ownerState.stickyHeader && {
            borderCollapse: "separate",
          }),

          caption: {
            clip: "rect(0 0 0 0)",
            clipPath: "inset(50%)",
            height: "1px",
            overflow: "hidden",
            position: "absolute",
            whiteSpace: "nowrap",
            width: "1px",
          },
        }),
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          ...theme.typography.body1,
          maxWidth: odysseyTokens.TypographyLineLengthMax,
          borderBottom: `${odysseyTokens.BorderWidthMain} ${odysseyTokens.BorderStyleMain} ${odysseyTokens.HueNeutral100}`,
          textAlign: "start",
          verticalAlign: "baseline",
          padding: "unset",
          paddingBlock: odysseyTokens.Spacing4,
          paddingInline: odysseyTokens.Spacing4,
          overflowWrap: "break-word",

          [`.${tableRowClasses.root}:hover &[rowspan]`]: {
            backgroundColor: odysseyTokens.HueNeutralWhite,
          },

          [`.${tableBodyClasses.root} .${tableRowClasses.root}:last-of-type &`]:
            {
              borderBottom: 0,
            },

          [`.${tableRowClasses.selected} &`]: {
            borderBottomColor: odysseyTokens.PalettePrimaryLight,
          },

          [`.${tableRowClasses.selected}:hover &`]: {
            borderBottomColor: odysseyTokens.PalettePrimaryMain,
          },

          ...(ownerState.variant === "action" && {
            paddingBlock: 0,
          }),

          ...(ownerState.variant === "body" && {
            color: odysseyTokens.TypographyColorBody,
          }),

          ...(ownerState.variant === "date" && {
            whiteSpace: "nowrap",
          }),

          ...(ownerState.variant === "footer" && {
            color: odysseyTokens.TypographyColorSubordinate,
            lineHeight: odysseyTokens.TypographyLineHeightBody,
            fontSize: odysseyTokens.TypographySizeBody,
          }),

          [`.${tableHeadClasses.root} &`]: {
            color: odysseyTokens.TypographyColorBody,
            lineHeight: odysseyTokens.TypographyLineHeightBody,
            fontWeight: odysseyTokens.TypographyWeightBodyBold,
            backgroundColor: odysseyTokens.HueNeutral50,
          },

          ...(ownerState.variant === "head" && {
            lineHeight: odysseyTokens.TypographyLineHeightBody,
            fontWeight: odysseyTokens.TypographyWeightBodyBold,
          }),

          ...(ownerState.variant === "number" && {
            textAlign: "end",
            fontFeatureSettings: '"lnum", "tnum"',
          }),

          ...(ownerState.padding === "checkbox" && {
            width: 48, // prevent the checkbox column from growing
            padding: "0 0 0 4px",
          }),

          ...(ownerState.padding === "none" && {
            padding: 0,
          }),

          ...(ownerState.align === "left" && {
            textAlign: "start",
          }),

          ...(ownerState.align === "center" && {
            textAlign: "center",
          }),

          ...(ownerState.align === "right" && {
            textAlign: "end",
            flexDirection: "row-reverse",
          }),

          ...(ownerState.align === "justify" && {
            textAlign: "justify",
          }),
        }),
      },
    },
    MuiTableContainer: {
      defaultProps: {
        // @ts-expect-error valid prop and value; MUI TS bug
        component: "figure",
      },
      styleOverrides: {
        root: {
          width: "unset",
          maxWidth: "100%",
          marginBlockStart: odysseyTokens.Spacing0,
          marginBlockEnd: odysseyTokens.Spacing4,
          marginInline: 0,
          overflowX: "auto",

          "&:last-child": {
            marginBlock: 0,
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          verticalAlign: "unset",
          [`&.${tableRowClasses.root}:hover`]: {
            backgroundColor: odysseyTokens.HueNeutral50,
          },
          [`&.${tableRowClasses.selected}`]: {
            backgroundColor: odysseyTokens.PalettePrimaryLighter,
            "&:hover": {
              backgroundColor: odysseyTokens.PalettePrimaryLighter,
            },
          },
        },
      },
    },
    MuiTableSortLabel: {
      defaultProps: {
        IconComponent: ArrowDownIcon,
      },
      styleOverrides: {
        root: {
          cursor: "pointer",
          display: "inline-flex",
          justifyContent: "flex-start",
          flexDirection: "inherit",
          alignItems: "center",
          "&:focus-visible": {
            color: odysseyTokens.TypographyColorBody,
            outlineOffset: odysseyTokens.Spacing4,
            outlineStyle: odysseyTokens.FocusOutlineStyle,
            outlineWidth: odysseyTokens.FocusOutlineWidthMain,
            outlineColor: odysseyTokens.FocusOutlineColorPrimary,
          },
          "&:hover": {
            color: odysseyTokens.TypographyColorBody,
            [`& .${tableSortLabelClasses.icon}`]: {
              opacity: 1,
            },
          },
          [`&.${tableSortLabelClasses.active}`]: {
            color: odysseyTokens.TypographyColorSubordinate,
            [`& .${tableSortLabelClasses.icon}`]: {
              opacity: 1,
              color: "inherit",
            },
          },
        },
        icon: ({ theme, ownerState }) => ({
          fontSize: "inherit",
          marginInlineEnd: 0,
          marginInlineStart: 0,
          opacity: 0,
          color: "inherit",
          transition: theme.transitions.create(["opacity", "transform"], {
            duration: odysseyTokens.TransitionDurationMain,
          }),
          userSelect: "none",

          [`.${tableCellClasses.alignRight} &`]: {
            marginInlineEnd: odysseyTokens.Spacing2,
          },

          [`.${tableCellClasses.alignLeft} &`]: {
            marginInlineStart: odysseyTokens.Spacing2,
          },

          ...(ownerState.direction === "desc" && {
            transform: "rotate(0deg)",
          }),
          ...(ownerState.direction === "asc" && {
            transform: "rotate(180deg)",
          }),
        }),
      },
    },
    MuiTabs: {
      defaultProps: {
        textColor: "inherit",
      },
      styleOverrides: {
        root: {
          minHeight: "unset",
          marginBottom: odysseyTokens.Spacing5,
        },

        flexContainer: {
          gap: odysseyTokens.Spacing5,
          borderBottom: `${odysseyTokens.BorderWidthMain} ${odysseyTokens.BorderStyleMain} ${odysseyTokens.BorderColorDisplay}`,
        },
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
        enterDelay: 500,
        enterNextDelay: 250,
        placement: "top",
      },
      styleOverrides: {
        tooltip: ({ ownerState }) => ({
          maxWidth: `calc(${odysseyTokens.TypographyLineLengthMax} / 2)`,
          paddingBlock: odysseyTokens.Spacing2,
          paddingInline: odysseyTokens.Spacing3,
          backgroundColor: odysseyTokens.HueNeutral900,
          color: odysseyTokens.HueNeutralWhite,
          fontSize: odysseyTokens.TypographySizeSubordinate,
          lineHeight: odysseyTokens.TypographyLineHeightBody,
          ...(ownerState.touch === true && {
            paddingBlock: odysseyTokens.Spacing2,
            paddingInline: odysseyTokens.Spacing3,
            fontSize: odysseyTokens.TypographySizeSubordinate,
            lineHeight: odysseyTokens.TypographyLineHeightBody,
            fontWeight: odysseyTokens.TypographyWeightBody,
          }),
          [`.${tooltipClasses.popper}[data-popper-placement*="left"] &`]: {
            transformOrigin: "right center",
            ...(ownerState.isRtl
              ? {
                  marginInlineStart: odysseyTokens.Spacing3,
                  ...(ownerState.touch === true && {
                    marginInlineStart: odysseyTokens.Spacing4,
                  }),
                }
              : {
                  marginInlineEnd: odysseyTokens.Spacing3,
                  ...(ownerState.touch === true && {
                    marginInlineEnd: odysseyTokens.Spacing4,
                  }),
                }),
          },
          [`.${tooltipClasses.popper}[data-popper-placement*="right"] &`]: {
            transformOrigin: "left center",
            ...(ownerState.isRtl
              ? {
                  marginInlineEnd: odysseyTokens.Spacing3,
                  ...(ownerState.touch === true && {
                    marginInlineEnd: odysseyTokens.Spacing4,
                  }),
                }
              : {
                  marginInlineStart: odysseyTokens.Spacing3,
                  ...(ownerState.touch === true && {
                    marginInlineStart: odysseyTokens.Spacing4,
                  }),
                }),
          },
          [`.${tooltipClasses.popper}[data-popper-placement*="top"] &`]: {
            transformOrigin: "center bottom",
            marginBottom: odysseyTokens.Spacing3,
            ...(ownerState.touch === true && {
              marginBottom: odysseyTokens.Spacing4,
            }),
          },
          [`.${tooltipClasses.popper}[data-popper-placement*="bottom"] &`]: {
            transformOrigin: "center top",
            marginTop: odysseyTokens.Spacing3,
            ...(ownerState.touch === true && {
              marginTop: odysseyTokens.Spacing4,
            }),
          },
        }),
        arrow: {
          color: odysseyTokens.HueNeutral900,
          "&::before": {
            borderRadius: "0",
          },

          [`.${tooltipClasses.popper}[data-popper-placement*="top"] &::before`]:
            {
              borderRadius: `0 0 3px 0`,
            },

          [`.${tooltipClasses.popper}[data-popper-placement*="right"] &::before`]:
            {
              borderRadius: `0 0 0 3px`,
            },

          [`.${tooltipClasses.popper}[data-popper-placement*="bottom"] &::before`]:
            {
              borderRadius: `3px 0 0 0`,
            },

          [`.${tooltipClasses.popper}[data-popper-placement*="left"] &::before`]:
            {
              borderRadius: `0 3px 0 0`,
            },
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          h5: "h5",
          h6: "h6",
          subtitle1: "p",
          body1: "p",
          inherit: "p",
          legend: "legend",
        },
      },
      styleOverrides: {
        paragraph: {
          marginBlockEnd: odysseyTokens.Spacing4,

          [`&:last-child`]: {
            marginBlockEnd: 0,
          },
        },
      },
    },
  };
};
