declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;

  const url: string;
  export default url;
}
declare type SSO_LOGIN_URI = string;
declare type CLIENT_ID = string;
declare type REDIRECT_URI = string;
