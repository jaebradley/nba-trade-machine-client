const sortTeamsTransactions = (transactions) => {
  const teamsTransactions = {};
  transactions.forEach((transaction) => {
    const teamTransactions = teamsTransactions[transaction.receivingTeam.espnId] || [];
    teamTransactions.push(transaction);
    teamsTransactions[transaction.receivingTeam.espnId] = teamTransactions;
  });
  return teamsTransactions;
};

const formatPlayerTransaction = transaction => (
  {
    assetObj: {
      name: '',
      playerId: transaction.asset.espnId,
      posId: transaction.asset.position.espnId,
      salary: 0,
      teUsed: 'false',
    },
    fromTeamId: `${transaction.sendingTeam.espnId}`,
    type: 'player',
  }
);

const generateTransactionsQuery = (transactions) => {
  const teamsTransactions = sortTeamsTransactions(transactions);
  const teams = Object.keys(teamsTransactions).map(key => ({
    inComingAssets: teamsTransactions[key].map(transaction => formatPlayerTransaction(transaction)),
    teamId: key,
  }));
  return { teams };
};

module.exports = {
  generateTransactionsQuery,
};
