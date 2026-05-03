export const getChatbotResponse = async (req, res) => {
  const { question } = req.body;
  const response = await generateResponseLlm(question);
  return res.status(200).json({
    status: "success",
    message: "Chatbot response success",
    data: {
      response,
    },
  });
};
