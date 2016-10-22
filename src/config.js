const config = {
  donationWizard: {
    baseRoute: '/',
    steps : {
      donationAmount: {
        step: '1',
        title: 'Choose Donation Amount',
        nextStep: '/profile',
        helpText: `
          Choose how much you would like to donate. If you select 'custom'
          you can provide any amount of your choosing.
          All donations are tax deductible!
        `
      },
      profile: {
        step: '2',
        title: 'Contact Information',
        helpText: ``,
        nextStep: '/cc',
        form: {
          validate: validateProfile
        }
      },
      cc: {
        step: '3'
      },
      final: {
        step: '4'
      }
    }
  },
  membershipWizard: {
    baseRoute: '',
    steps : {
      membershipLevel: {
        step: '1',
        helpTitle: '',
        helpText: ``
      },
      profile: {
        step: '2',
        helpText: ``
      },
      billing: {
        step: '3',
        helpTitle: '',
        helpText: ``
      },
      cc: {
        step: '4'
      },
      final: {
        step: '5'
      }
    }
  },
  donationLevels: [
    {
      label: 'Gold',
      value: 10000
    },
    {
      label: 'Silver',
      value: 5000
    },
    {
      label: 'Bronze',
      value: 3000
    },
    {
      label: 'Supporter',
      value: 2000
    }
  ]
}

const validateProfile = (values) => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  }
  if (!values.email) {
    errors.email = 'Email is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

export default config
