import icon_email from '../svg/email.svg'
import icon_link from '../svg/link.svg'
import icon_github from '../svg/github.svg'
import { $ } from '../util'

class User {
  constructor(selector, user) {
    this.container = $(selector)
    this.user = null
  }

  get email() {
    return this.user.email ?
    `<a target="_blank" href="mailto:${this.user.email}">${icon_email}</a>` : ''
  }

  get website() {
    return this.user.websiteUrl ?
    `<a target="_blank" href="${this.user.websiteUrl}">${icon_link}</a>` : ''
  }

  get bio() {
    return this.user.bio ? `<p>${this.user.bio}</p>` : ''
  }

  render(userData) {
    this.user = userData

    const { user, email, website, bio, container } = this

    container.html(`
      <img src="${user.avatarUrl}" />
      <h1>${user.name || user.login}</h1>
      ${bio}
      <div class="social">
        <a target="_blank" href="${user.url}">${icon_github}</a>
        ${website}
        ${email}
      </div>
    `)
  }
}

export default User