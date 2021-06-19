declare const window: Window & { haveMobile: boolean };
window.haveMobile = false;

// console.log("environment writer: have Mobile ?", (window as any).haveMobile);

export const domainEnvironment = {
    afterLoginUrl: '/list',
    writer: true,
    reader: false
}