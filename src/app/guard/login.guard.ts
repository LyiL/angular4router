/**
 * Created by lenovo on 2017/6/22.
 */
import { CanActivate } from '@angular/router'

export class LoginGuard implements CanActivate {
  canActivate() {
    let loggedIn: boolean = Math.random() < 0.5;
    //判断-----如果大于0.5，表示用户未登陆
    if (!loggedIn){
      console.log("用户未登录");
    }
    return loggedIn;
  }
}
