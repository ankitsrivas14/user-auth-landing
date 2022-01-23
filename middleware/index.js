import { getCookie } from "../utils/cookie";

export default async function (context) {
  let token;

  if(context.req) {
     token = getCookie({ name: context.env.NUXT_ENV_LS_NAME_TOKEN, where: context.req.headers });
  } else {
    token = getCookie({ name: context.env.NUXT_ENV_LS_NAME_TOKEN });
  }

  try {
    const response = await context.$axios.post("https://inisev-backend.herokuapp.com/check-token", {token});
    if(response.status != 200) {
      if(context.route.path !== '/login') {
        context.redirect(302, '/login')
      }
    }

    if(context.route.path !== '/users') {
      context.redirect(302, '/users')
    }

  } catch (error) {
    // if(context.route.path !== '/login') {
      context.redirect(302, '/login')
    // }
  }

  return
}