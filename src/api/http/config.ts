export const CURRENT_CONFIG = {

  // license
  appId: '178863', // You need to go to the development website to apply.
  appKey: 'f2ed9a358a9ff4f59965df24d2ec22e', // You need to go to the development website to apply.
  appLicense: 'fK70APnrWNEZVBYBO/7Q/hAF1CegCOBt9KuvZN72vW0J/iR2W+M4eO6iC3i2NghQXQG19PsqPtNDhhNpUF3EX675LdPdqmUkMTaGZ2//g8ll3uxrvlpBrve81wMKc4KhRlJws9sQgJtRtiq8KsfX6RSeRkV4bVT1wg8VFPbk24Y=', // You need to go to the development website to apply.

  // http
  baseURL: 'http://172.16.1.3:6789', // This url must end with "/". Example: 'http://192.168.1.1:6789/'
  websocketURL: 'ws://172.16.1.3:6789/api/v1/ws', // Example: 'ws://192.168.1.1:6789/api/v1/ws'

  // livestreaming
  // RTMP  Note: This IP is the address of the streaming server. If you want to see livestream on web page, you need to convert the RTMP stream to WebRTC stream.
  rtmpURL: 'rtmp://dbx.dronebox-prod.arv.co.th/WebRTCAppEE/ok', // Example: 'rtmp://192.168.1.1/live/'
  // GB28181 Note:If you don't know what these parameters mean, you can go to Pilot2 and select the GB28181 page in the cloud platform. Where the parameters same as these parameters.
  gbServerIp: 'Please enter the server ip.',
  gbServerPort: 'Please enter the server port.',
  gbServerId: 'Please enter the server id.',
  gbAgentId: 'Please enter the agent id',
  gbPassword: 'Please enter the agent password',
  gbAgentPort: 'Please enter the local port.',
  gbAgentChannel: 'Please enter the channel.',
  // RTSP
  rtspUserName: 'Please enter the username.',
  rtspPassword: 'Please enter the password.',
  rtspPort: '8554',
  // Agora
  agoraAPPID: 'Please enter the agora app id.',
  agoraToken: 'Please enter the agora temporary token.',
  agoraChannel: 'Please enter the agora channel.',

  // map
  // You can apply on the AMap website.
  amapKey: 'Please enter the amap key.',

}
