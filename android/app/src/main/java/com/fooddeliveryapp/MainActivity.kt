package com.fooddeliveryapp

import android.content.res.Configuration
import android.os.Bundle
import android.widget.Toast
import androidx.annotation.NonNull
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import org.devio.rn.splashscreen.SplashScreen

import io.agora.rtc2.ChannelMediaOptions
import io.agora.rtc2.Constants
import io.agora.rtc2.IRtcEngineEventHandler
import io.agora.rtc2.RtcEngine
import io.agora.rtc2.RtcEngineConfig
import android.content.pm.PackageManager


class MainActivity : ReactActivity() {

    // Fill in your App ID, which can be generated in the Agora console
    val appId = "91581497c83d4af4a5b29b855b568ad6"

    // Fill in the channel name
    val channelName = "my-channel"

    // Fill in the temporary Token generated in the Agora console
    val token = "007eJxTYDh/tX+Riqys5Iv5a5X8miuntx8TLf6u//zJDIsNxurxk+cpMFgamloYmliaJ1sYp5gkppkkmiYZWSZZmJommZpZJKaYuR3lSW8IZGSIVyhnYIRCEJ+LIbdSNzkjMS8vNYeBAQDmxiB6"

    private var mRtcEngine: RtcEngine? = null

    private val mRtcEventHandler = object : IRtcEngineEventHandler() {
        override fun onJoinChannelSuccess(channel: String, uid: Int, elapsed: Int) {
            super.onJoinChannelSuccess(channel, uid, elapsed)
            showToast("Join channel success")
        }

        override fun onUserJoined(uid: Int, elapsed: Int) {
            super.onUserJoined(uid, elapsed)
            showToast("User joined: $uid")
        }

        override fun onUserOffline(uid: Int, reason: Int) {
            super.onUserOffline(uid, reason)
            showToast("User offline: $uid")
        }
    }

    private fun initializeAndJoinChannel() {
        try {
            // Create an RtcEngineConfig object and configure it
            val config = RtcEngineConfig()
            config.mContext = baseContext
            config.mAppId = appId
            config.mEventHandler = mRtcEventHandler

            // Create and initialize the RtcEngine
            mRtcEngine = RtcEngine.create(config)
        } catch (e: Exception) {
            throw RuntimeException("Check the error: ${e.message}")
        }

        // Create a ChannelMediaOptions object and configure it
        val options = ChannelMediaOptions()
        options.clientRoleType = Constants.CLIENT_ROLE_BROADCASTER
        options.channelProfile = Constants.CHANNEL_PROFILE_COMMUNICATION
        options.publishMicrophoneTrack = true
        options.autoSubscribeAudio = true

        // Join the channel using a uid, temporary token and channel name.
        mRtcEngine?.joinChannel(token, channelName, 0, options)
    }

    private val PERMISSION_REQ_ID = 22

    private fun getRequiredPermissions(): Array<String> {
        return if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.S) {
            arrayOf(
                android.Manifest.permission.RECORD_AUDIO,
                android.Manifest.permission.READ_PHONE_STATE,
                android.Manifest.permission.BLUETOOTH_CONNECT
            )
        } else {
            arrayOf(
                android.Manifest.permission.RECORD_AUDIO
            )
        }
    }

    private fun checkPermissions(): Boolean {
        for (permission in getRequiredPermissions()) {
            val permissionCheck = ContextCompat.checkSelfPermission(this, permission)
            if (permissionCheck != PackageManager.PERMISSION_GRANTED) {
                return false
            }
        }
        return true
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        // Set theme based on current configuration
        when (resources.configuration.uiMode and Configuration.UI_MODE_NIGHT_MASK) {
            Configuration.UI_MODE_NIGHT_YES -> setTheme(R.style.DarkTheme)
            Configuration.UI_MODE_NIGHT_NO -> setTheme(R.style.LightTheme)
            else -> setTheme(R.style.LightTheme)
        }

        SplashScreen.show(this) // Show the splash screen
        super.onCreate(savedInstanceState)

         if (!checkPermissions()) {
        ActivityCompat.requestPermissions(this, getRequiredPermissions(), PERMISSION_REQ_ID)
    }
    }

    // System permission request callback
    override fun onRequestPermissionsResult(requestCode: Int, permissions: Array<String>, grantResults: IntArray) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
        if (checkPermissions()) {
            initializeAndJoinChannel()
        }
    }

    override fun onDestroy() {
        super.onDestroy()
        mRtcEngine?.leaveChannel()
        mRtcEngine = null
        RtcEngine.destroy()
    }

    /**
     * Returns the name of the main component registered from JavaScript. This is used to schedule
     * rendering of the component.
     */
    override fun getMainComponentName(): String = "foodDeliveryApp"

    /**
     * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
     * which allows you to enable New Architecture with a single boolean flag [fabricEnabled]
     */
    override fun createReactActivityDelegate(): ReactActivityDelegate =
        DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

    private fun showToast(message: String) {
        runOnUiThread {
            Toast.makeText(this, message, Toast.LENGTH_SHORT).show()
        }
    }
}