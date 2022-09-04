import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document{
    render() {
        return(
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />

                    <link rel="shortcut icon" href="/favicon.png" type='image/png' />
                </Head>
                <body>
                    {/* Substitui a div com id root */}
                    <Main /> 
                    {/* Onde o next ira colocar os arquivos js */}
                    <NextScript/>
                </body>
            </Html>
        )
    }
}