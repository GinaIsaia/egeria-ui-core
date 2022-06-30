import { logout } from "../authentication";

export function handleResponse(response: any) {
  if (!response.ok) {
    if ([401, 403].indexOf(response.status) !== -1) {
      logout();
    }

    return Promise.reject();
  }

  return response;
}
