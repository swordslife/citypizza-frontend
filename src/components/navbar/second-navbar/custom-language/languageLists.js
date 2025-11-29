import usFlag from '../../../../../public/static/country-flag/us.svg'
import arFlag from '../../../../../public/static/country-flag/arabic-flag-svg.svg'
import banFlag from '../../../../../public/static/country-flag/ger.png'
import spanFlag from '../../../../../public/static/country-flag/spain.png'
export const languageLists = [
    {
        languageName: 'Arabic',
        languageCode: 'ar',
        countryCode: 'SA',
        countryFlag: arFlag.src,
    },
    {
        languageName: 'English',
        languageCode: 'en',
        countryCode: 'US',
        countryFlag: usFlag.src,
    },
    {
        languageName: 'Spanish',
        languageCode: 'es',
        countryCode: 'es',
        countryFlag: spanFlag.src,
    },
    {
        languageName: 'Deutsch',
        languageCode: 'de',
        countryCode: 'DE',
        countryFlag: banFlag.src,
    },
]
