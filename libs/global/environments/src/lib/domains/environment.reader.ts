declare const window: Window & { haveMobile: boolean };
window.haveMobile = true;

// console.log("environment reader: have Mobile ?", (window as any).haveMobile);


export const domainEnvironment = {
    afterLoginUrl: '/',
    writer: false,
    reader: true
};