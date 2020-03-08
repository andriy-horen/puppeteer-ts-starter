import puppeteer from 'puppeteer';

async function bootstrap() {
    const browser = await puppeteer.launch({
        headless: false,
    });

    const page = (await browser.pages())[0];
    await page.goto('https://github.com/puppeteer/puppeteer#puppeteer');
}

bootstrap();
