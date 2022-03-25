import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      translucent: {
        white: string;
        primary: string;
      };
      black: string;
      white: string;
    };
  }
}
