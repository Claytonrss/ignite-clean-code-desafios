function updateUserRoute(body, params) {
  updateUserController({
    data: { name: body.name, email: body.email, password: body.password },
    params: { id: params.id },
  });
}

function updateUserController({
  data: { name, email, password },
  params: { id },
}) {
  userRepository.update({
    data: { name: name, email, password },
    params: { id },
  });
}

const userRepository = {
  update: ({ data: { name, email, password }, params: { id } }) => {},
};
