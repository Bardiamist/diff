package com.diff

import android.app.Application
import android.content.res.Configuration
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactHost
import com.facebook.react.ReactNativeApplicationEntryPoint.loadReactNative
import expo.modules.ApplicationLifecycleDispatcher
import expo.modules.ExpoReactHostFactory

class MainApplication : Application(), ReactApplication {

  override val reactHost: ReactHost by lazy {
    // https://docs.expo.dev/bare/installing-expo-modules/#configuration-for-android
    ExpoReactHostFactory.getDefaultReactHost(
      context = applicationContext,
      jsMainModulePath = "index",
      packageList =
        PackageList(this).packages.apply {
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // add(MyReactNativePackage())
        },
    )
  }

  override fun onCreate() {
    super.onCreate()
    loadReactNative(this)
    // https://docs.expo.dev/bare/installing-expo-modules/#configuration-for-android
    ApplicationLifecycleDispatcher.onApplicationCreate(this)
  }

  // https://docs.expo.dev/bare/installing-expo-modules/#configuration-for-android
  override fun onConfigurationChanged(newConfig: Configuration) {
    super.onConfigurationChanged(newConfig)
    ApplicationLifecycleDispatcher.onConfigurationChanged(this, newConfig)
  }
}
