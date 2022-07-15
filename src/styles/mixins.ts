const mixins = {
  flexBox: (align = 'center', justify = 'center') => `
    display: flex;
    align-items: ${align};
    justify-content: ${justify};
  `,
  boxShadow: () => `
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  `,
  transformCenter: () => `
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
};

export default mixins;
