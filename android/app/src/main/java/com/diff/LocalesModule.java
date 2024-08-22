package com.diff;

import androidx.appcompat.app.AppCompatDelegate;
import androidx.core.os.LocaleListCompat;

import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class LocalesModule extends ReactContextBaseJavaModule {
    @Override
    public String getName() {
        return "Locales";
    }

    @ReactMethod
    public void setLanguage() {
        LocaleListCompat appLocale = LocaleListCompat.forLanguageTags("zh-Hans");
        AppCompatDelegate.setApplicationLocales(appLocale);
    }
}
