import {useCallback, useEffect, useMemo, useState} from 'react';
import {Appearance} from 'react-native';
import {themeDark, themeLight, themeTypes} from '../constants/themes';

const useAppearance = () => {
    const [currentTypeTheme, setCurrentTypeTheme] = useState(
        Appearance.getColorScheme() || themeTypes.light,
    );

    useEffect(() => {
        const subscription = Appearance.addChangeListener(({colorScheme}) => {
            setCurrentTypeTheme(
                colorScheme === themeTypes.dark
                    ? themeTypes.dark
                    : themeTypes.light,
            );
        });

        return () => {
            subscription.remove();
        };
    }, []);

    const handleChangeAppearance = useCallback(() => {
        setCurrentTypeTheme(prevType =>
            prevType === themeTypes.light ? themeTypes.dark : themeTypes.light,
        );
    }, []);

    const theme = useMemo(() => {
        return currentTypeTheme === themeTypes.light ? themeLight : themeDark;
    }, [currentTypeTheme]);

    return {currentTypeTheme, theme, handleChangeAppearance};
};

export default useAppearance;
