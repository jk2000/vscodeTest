({
	doCommonInit : function(component, event, helper) {
		console.log('jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj0');
		var options = {
            media: {
                remote:{
                    audio: document.getElementById('remoteAudio'),
                    video: false
                }
            },
            /*
            SIP 서버 및 포트 :    117.52.82.243  /  6030
			SIP 계정 및 비번 :    7001 ~ 7004 /    090909
			 계정별 070번호 :     07047681411 ~ 07047681414     (끝자리로 매칭하시면 됩니다. )
			WebRTC  관련 포트 :  5066, 7443
            */
            ua: {
                uri: '7004@wisecontact.windmillsoft.kr',
                wsServers:  ['wss://wisecontact.windmillsoft.kr:7443'],
                register: true,
                authorizationUser: '7004',
                password: '090909'
            }
        };
        var simple = new SIP.WebRTC.Simple(options);
        console.log('simple ================================');
        console.log(simple);
        simple.on('ringing', function() {
        	alert('incomming call');
        });
        
        component.set('v.simple', simple);
        console.log('=========================================');
        console.log(component.get('v.simple'));
        simple.call('010-2639-6012');
	}
})