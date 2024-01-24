// This will allow you to import .scss modules
declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}
