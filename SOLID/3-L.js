// Liskov substitution - if class A is a subtype of class B, we should be able to replace B with A without disrupting the behavior of our program
// The inheriting class should complete, not override, the behavior of the base class.

class Member {
  constructor(options) {
    this.club = options.club
  }
  access() {
    console.log(`I have access to private football club information as "${this.club}" member`)
  }
}

class Player extends Member {
  constructor(options) {
    super(options)
    this.name = options.name
  }
}

const player = new Player({ club: 'Manchester United', name: 'Marcus Rashford' })
const member = new Member({ club: 'Manchester United' })

function getSecretInfo(member) {
  member.access()
}

getSecretInfo(member)
getSecretInfo(player)
