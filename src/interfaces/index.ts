type Font = {
  fontFamily: string;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
};

type Fonts = {
  regular: Font;
  medium: Font;
  light: Font;
  thin: Font;
};

export interface ITheme {
  dark: boolean;
  mode?: 'adaptive' | 'exact';
  roundness: number;
  themeName: 'dark' | 'light';
  colors: {
    accent: string;
    backdrop: string;
    background: string;
    disabled: string;
    error: string;
    notification: string;
    onSurface: string;
    placeholder: string;
    primary: string;
    surface: string;
    text: string;
  };
  fonts: Fonts;
  animation: {
    scale: number;
  };
}
