const teamDetailsHtml = `
<div id="team_2" class="teams1 team-container">
<div class="team bos">
    <div class="teamInfo">
        <h2 class="fLeft teamName">Boston Celtics</h2>
        <div class="fRight">
            <a class="closeBtn">
                <img src="http://a.espncdn.com/nba/tradeMachine/images/btn-closePlayer.gif" class="no-border"/>
            </a>
        </div>
        <div class="teamHeader teamHeader-first">
            <p>Over Tax Line</p>
            <p class="number teampayrollvalue">
        -$8,736,322
        </p>
        </div>
        <div class="teamHeader">
            <p>Cap Room</p>
            <p class="number caproomvalue">
        -$10,780,911
        </p>
        </div>
        <div class="clear"></div>
    </div>
    <div class="clear"></div>
</div>
<div>
    <div class="desc">
        <ul class="line desc-header">
            <li class="d1 c1">Player</li>
            <li class="c2">Salary</li>
            <li class="c3" style="width:47px;">
          PER

                <a href="http://espn.go.com/nba/columns/story?columnist=hollinger_john&id=2850240" target="_blank">
                    <img src="http://a.espncdn.com/nba/tradeMachine/images/icon_per.gif" />
                </a>
            </li>
        </ul>
    </div>
    <div class="trades" style="display:none;">
        <div class="trade_footer" style="background-color:#006532;">
            <p class="player-desc player-desc-c1 fLeft">
          Acquiring
                <span class="numPlayers">0 Players</span>
            </p>
            <p class="player-desc">
                <span class="tradeAmount"></span>
                <span class="tradeAmount_sm" style="display:none;"></span>
            </p>
            <div style="clear:both;"></div>
        </div>
        <div class="roster_header" style="clear:both;">
            <p class="player-desc">Boston Celtics Roster</p>
        </div>
    </div>
    <div class="roster">
        <div id="player_4249" class="player team_2 disabled" >
            <div class="traded">Being Traded To
                <strong class="toTeam"></strong>
            </div>
            <div>
                <img class="fLeft player_mug" src="http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4249.png&w=28&h=38&scale=crop&background=0xcccccc&transparent=false" />
                <div class="fLeft">
                    <ul class="line">
                        <li class="c1">
                            <a href="#" onclick="return false;" onmouseover="$j($j(this).parents('.player').get(0)).removeClass('active');" class="playerName">G.&nbsp;Hayward</a>
                        </li>
                        <li class="c2">
                            <span class="salary" >$29,727,900</span>
                            <span class="salary_sm"  style="display:none;">$29.7M</span>
                        </li>
                        <li class="c3">N/A</li>
                    </ul>
                    <ul class="line">
                        <li class="c1">
        SF

                            <span class="posId">5</span>
                            <a href="#" onmouseover="toggleRestriction(this, 4249, true, ''); return false;" onmouseout="toggleRestriction(this, 4249, false, ''); return false;" onclick="return false;" >
                                <img class="btn" src="http://a.espncdn.com/nba/tradeMachine/images/icon-trade-restriction.png" />
                            </a>
                            <span class="teUsed" style="display:none;">0</span>
                        </li>
                        <li class="c2">4 Years</li>
                    </ul>
                </div>
            </div>
            <img class="team_logo fLeft" src="http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/bos.png&w=30&h=30&transparent=true" />
            <div class="btn-closePlayer" style="display: none">
                <a href="#" onclick="removeTrade('4249','2'); return false;">
                    <img src="http://a.espncdn.com/nba/tradeMachine/images/btn-closePlayer.gif" />
                </a>
            </div>
        </div>
        <div style="position:relative; z-index:4;">
            <div id="restriction_4249" class="restriction-popup">
                <h3>Signed Contract</h3>
                <span>Restriction Expires:
                    <strong>December 14, 2017</strong>
                </span>
                <br/>
                <p>When a free agent signs a contract, or when a player signed to a Two-Way contract has his contract converted to a standard NBA contract, they cannot be traded until December 15 or 3 months, whichever is later.</p>
            </div>
        </div>
        <div id="player_3213" class="player team_2" onmouseover="highlightPlayer(this, true);" onmouseout="highlightPlayer(this, false);">
            <div class="traded">Being Traded To
                <strong class="toTeam"></strong>
            </div>
            <div>
                <img class="fLeft player_mug" src="http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3213.png&w=28&h=38&scale=crop&background=0xcccccc&transparent=false" />
                <div class="fLeft">
                    <ul class="line">
                        <li class="c1">
                            <a href="#" onclick="return false;" onmouseover="$j($j(this).parents('.player').get(0)).removeClass('active');" class="playerName">Al&nbsp;Horford</a>
                        </li>
                        <li class="c2">
                            <span class="salary" >$27,734,406</span>
                            <span class="salary_sm"  style="display:none;">$27.7M</span>
                        </li>
                        <li class="c3">21.4</li>
                    </ul>
                    <ul class="line">
                        <li class="c1">
        PF

                            <span class="posId">6</span>
                            <span class="teUsed" style="display:none;">0</span>
                        </li>
                        <li class="c2">3 Years</li>
                    </ul>
                </div>
            </div>
            <img class="team_logo fLeft" src="http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/bos.png&w=30&h=30&transparent=true" />
            <div class="btn-closePlayer" style="display: none">
                <a href="#" onclick="removeTrade('3213','2'); return false;">
                    <img src="http://a.espncdn.com/nba/tradeMachine/images/btn-closePlayer.gif" />
                </a>
            </div>
        </div>
        <div style="position:relative; z-index:4;"></div>
        <div id="player_6442" class="player team_2" onmouseover="highlightPlayer(this, true);" onmouseout="highlightPlayer(this, false);">
            <div class="traded">Being Traded To
                <strong class="toTeam"></strong>
            </div>
            <div>
                <img class="fLeft player_mug" src="http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6442.png&w=28&h=38&scale=crop&background=0xcccccc&transparent=false" />
                <div class="fLeft">
                    <ul class="line">
                        <li class="c1">
                            <a href="#" onclick="return false;" onmouseover="$j($j(this).parents('.player').get(0)).removeClass('active');" class="playerName">Kyrie&nbsp;Irving</a>
                        </li>
                        <li class="c2">
                            <span class="salary" >$18,868,626</span>
                            <span class="salary_sm"  style="display:none;">$18.9M</span>
                        </li>
                        <li class="c3">22.5</li>
                    </ul>
                    <ul class="line">
                        <li class="c1">
        PG

                            <span class="posId">1</span>
                            <a href="#" onmouseover="toggleRestriction(this, 6442, true, ''); return false;" onmouseout="toggleRestriction(this, 6442, false, ''); return false;" onclick="return false;" >
                                <img class="btn" src="http://a.espncdn.com/nba/tradeMachine/images/icon-trade-restriction.png" />
                            </a>
                            <span class="teUsed" style="display:none;">0</span>
                        </li>
                        <li class="c2">3 Years</li>
                    </ul>
                </div>
            </div>
            <img class="team_logo fLeft" src="http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/bos.png&w=30&h=30&transparent=true" />
            <div class="btn-closePlayer" style="display: none">
                <a href="#" onclick="removeTrade('6442','2'); return false;">
                    <img src="http://a.espncdn.com/nba/tradeMachine/images/btn-closePlayer.gif" />
                </a>
            </div>
        </div>
        <div style="position:relative; z-index:4;">
            <div id="restriction_6442" class="restriction-popup">
                <h3>No Reacquiring
                    <span>(Cleveland Cavaliers)</span>
                </h3>
                <span>Restriction Expires:
                    <strong>June 30, 2018</strong>
                </span>
                <br/>
                <p>A team can not reacquire a player they traded away during that season (July 1 - June 30)</p>
            </div>
        </div>
        <div id="player_4065648" class="player team_2" onmouseover="highlightPlayer(this, true);" onmouseout="highlightPlayer(this, false);">
            <div class="traded">Being Traded To
                <strong class="toTeam"></strong>
            </div>
            <div>
                <img class="fLeft player_mug" src="http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065648.png&w=28&h=38&scale=crop&background=0xcccccc&transparent=false" />
                <div class="fLeft">
                    <ul class="line">
                        <li class="c1">
                            <a href="#" onclick="return false;" onmouseover="$j($j(this).parents('.player').get(0)).removeClass('active');" class="playerName">Jayson&nbsp;Tatum</a>
                        </li>
                        <li class="c2">
                            <span class="salary" >$5,645,400</span>
                            <span class="salary_sm"  style="display:none;">$5.6M</span>
                        </li>
                        <li class="c3">16.1</li>
                    </ul>
                    <ul class="line">
                        <li class="c1">
        SF

                            <span class="posId">5</span>
                            <span class="teUsed" style="display:none;">0</span>
                        </li>
                        <li class="c2">4 Years</li>
                    </ul>
                </div>
            </div>
            <img class="team_logo fLeft" src="http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/bos.png&w=30&h=30&transparent=true" />
            <div class="btn-closePlayer" style="display: none">
                <a href="#" onclick="removeTrade('4065648','2'); return false;">
                    <img src="http://a.espncdn.com/nba/tradeMachine/images/btn-closePlayer.gif" />
                </a>
            </div>
        </div>
        <div style="position:relative; z-index:4;"></div>
        <div id="player_6462" class="player team_2" onmouseover="highlightPlayer(this, true);" onmouseout="highlightPlayer(this, false);">
            <div class="traded">Being Traded To
                <strong class="toTeam"></strong>
            </div>
            <div>
                <img class="fLeft player_mug" src="http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6462.png&w=28&h=38&scale=crop&background=0xcccccc&transparent=false" />
                <div class="fLeft">
                    <ul class="line">
                        <li class="c1">
                            <a href="#" onclick="return false;" onmouseover="$j($j(this).parents('.player').get(0)).removeClass('active');" class="playerName">M.&nbsp;Morris</a>
                        </li>
                        <li class="c2">
                            <span class="salary" >$5,000,000</span>
                            <span class="salary_sm"  style="display:none;">$5.0M</span>
                        </li>
                        <li class="c3">16.5</li>
                    </ul>
                    <ul class="line">
                        <li class="c1">
        PF

                            <span class="posId">6</span>
                            <span class="teUsed" style="display:none;">0</span>
                        </li>
                        <li class="c2">2 Years</li>
                    </ul>
                </div>
            </div>
            <img class="team_logo fLeft" src="http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/bos.png&w=30&h=30&transparent=true" />
            <div class="btn-closePlayer" style="display: none">
                <a href="#" onclick="removeTrade('6462','2'); return false;">
                    <img src="http://a.espncdn.com/nba/tradeMachine/images/btn-closePlayer.gif" />
                </a>
            </div>
        </div>
        <div style="position:relative; z-index:4;"></div>
        <div id="player_3917376" class="player team_2" onmouseover="highlightPlayer(this, true);" onmouseout="highlightPlayer(this, false);">
            <div class="traded">Being Traded To
                <strong class="toTeam"></strong>
            </div>
            <div>
                <img class="fLeft player_mug" src="http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3917376.png&w=28&h=38&scale=crop&background=0xcccccc&transparent=false" />
                <div class="fLeft">
                    <ul class="line">
                        <li class="c1">
                            <a href="#" onclick="return false;" onmouseover="$j($j(this).parents('.player').get(0)).removeClass('active');" class="playerName">Jaylen&nbsp;Brown</a>
                        </li>
                        <li class="c2">
                            <span class="salary" >$4,956,480</span>
                            <span class="salary_sm"  style="display:none;">$5.0M</span>
                        </li>
                        <li class="c3">13.3</li>
                    </ul>
                    <ul class="line">
                        <li class="c1">
        SG

                            <span class="posId">2</span>
                            <span class="teUsed" style="display:none;">0</span>
                        </li>
                        <li class="c2">3 Years</li>
                    </ul>
                </div>
            </div>
            <img class="team_logo fLeft" src="http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/bos.png&w=30&h=30&transparent=true" />
            <div class="btn-closePlayer" style="display: none">
                <a href="#" onclick="removeTrade('3917376','2'); return false;">
                    <img src="http://a.espncdn.com/nba/tradeMachine/images/btn-closePlayer.gif" />
                </a>
            </div>
        </div>
        <div style="position:relative; z-index:4;"></div>
        <div id="player_2990992" class="player team_2" onmouseover="highlightPlayer(this, true);" onmouseout="highlightPlayer(this, false);">
            <div class="traded">Being Traded To
                <strong class="toTeam"></strong>
            </div>
            <div>
                <img class="fLeft player_mug" src="http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2990992.png&w=28&h=38&scale=crop&background=0xcccccc&transparent=false" />
                <div class="fLeft">
                    <ul class="line">
                        <li class="c1">
                            <a href="#" onclick="return false;" onmouseover="$j($j(this).parents('.player').get(0)).removeClass('active');" class="playerName">Marcus&nbsp;Smart</a>
                        </li>
                        <li class="c2">
                            <span class="salary" >$4,538,020</span>
                            <span class="salary_sm"  style="display:none;">$4.5M</span>
                        </li>
                        <li class="c3">11.6</li>
                    </ul>
                    <ul class="line">
                        <li class="c1">
        PG

                            <span class="posId">1</span>
                            <span class="teUsed" style="display:none;">0</span>
                        </li>
                        <li class="c2">2 Years</li>
                    </ul>
                </div>
            </div>
            <img class="team_logo fLeft" src="http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/bos.png&w=30&h=30&transparent=true" />
            <div class="btn-closePlayer" style="display: none">
                <a href="#" onclick="removeTrade('2990992','2'); return false;">
                    <img src="http://a.espncdn.com/nba/tradeMachine/images/btn-closePlayer.gif" />
                </a>
            </div>
        </div>
        <div style="position:relative; z-index:4;"></div>
        <div id="player_2968439" class="player team_2 disabled" >
            <div class="traded">Being Traded To
                <strong class="toTeam"></strong>
            </div>
            <div>
                <img class="fLeft player_mug" src="http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2968439.png&w=28&h=38&scale=crop&background=0xcccccc&transparent=false" />
                <div class="fLeft">
                    <ul class="line">
                        <li class="c1">
                            <a href="#" onclick="return false;" onmouseover="$j($j(this).parents('.player').get(0)).removeClass('active');" class="playerName">Aron&nbsp;Baynes</a>
                        </li>
                        <li class="c2">
                            <span class="salary" >$4,328,000</span>
                            <span class="salary_sm"  style="display:none;">$4.3M</span>
                        </li>
                        <li class="c3">14.7</li>
                    </ul>
                    <ul class="line">
                        <li class="c1">
        C

                            <span class="posId">9</span>
                            <a href="#" onmouseover="toggleRestriction(this, 2968439, true, ''); return false;" onmouseout="toggleRestriction(this, 2968439, false, ''); return false;" onclick="return false;" >
                                <img class="btn" src="http://a.espncdn.com/nba/tradeMachine/images/icon-trade-restriction.png" />
                            </a>
                            <span class="teUsed" style="display:none;">0</span>
                        </li>
                        <li class="c2">1 Year</li>
                    </ul>
                </div>
            </div>
            <img class="team_logo fLeft" src="http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/bos.png&w=30&h=30&transparent=true" />
            <div class="btn-closePlayer" style="display: none">
                <a href="#" onclick="removeTrade('2968439','2'); return false;">
                    <img src="http://a.espncdn.com/nba/tradeMachine/images/btn-closePlayer.gif" />
                </a>
            </div>
        </div>
        <div style="position:relative; z-index:4;">
            <div id="restriction_2968439" class="restriction-popup">
                <h3>Signed Contract</h3>
                <span>Restriction Expires:
                    <strong>December 14, 2017</strong>
                </span>
                <br/>
                <p>When a free agent signs a contract, or when a player signed to a Two-Way contract has his contract converted to a standard NBA contract, they cannot be traded until December 15 or 3 months, whichever is later.</p>
            </div>
        </div>
        <div id="player_4017844" class="player team_2" onmouseover="highlightPlayer(this, true);" onmouseout="highlightPlayer(this, false);">
            <div class="traded">Being Traded To
                <strong class="toTeam"></strong>
            </div>
            <div>
                <img class="fLeft player_mug" src="http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4017844.png&w=28&h=38&scale=crop&background=0xcccccc&transparent=false" />
                <div class="fLeft">
                    <ul class="line">
                        <li class="c1">
                            <a href="#" onclick="return false;" onmouseover="$j($j(this).parents('.player').get(0)).removeClass('active');" class="playerName">G.&nbsp;Yabusele</a>
                        </li>
                        <li class="c2">
                            <span class="salary" >$2,247,480</span>
                            <span class="salary_sm"  style="display:none;">$2.2M</span>
                        </li>
                        <li class="c3">N/A</li>
                    </ul>
                    <ul class="line">
                        <li class="c1">
        PF

                            <span class="posId">6</span>
                            <span class="teUsed" style="display:none;">0</span>
                        </li>
                        <li class="c2">4 Years</li>
                    </ul>
                </div>
            </div>
            <img class="team_logo fLeft" src="http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/bos.png&w=30&h=30&transparent=true" />
            <div class="btn-closePlayer" style="display: none">
                <a href="#" onclick="removeTrade('4017844','2'); return false;">
                    <img src="http://a.espncdn.com/nba/tradeMachine/images/btn-closePlayer.gif" />
                </a>
            </div>
        </div>
        <div style="position:relative; z-index:4;"></div>
        <div id="player_3074752" class="player team_2" onmouseover="highlightPlayer(this, true);" onmouseout="highlightPlayer(this, false);">
            <div class="traded">Being Traded To
                <strong class="toTeam"></strong>
            </div>
            <div>
                <img class="fLeft player_mug" src="http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3074752.png&w=28&h=38&scale=crop&background=0xcccccc&transparent=false" />
                <div class="fLeft">
                    <ul class="line">
                        <li class="c1">
                            <a href="#" onclick="return false;" onmouseover="$j($j(this).parents('.player').get(0)).removeClass('active');" class="playerName">Terry&nbsp;Rozier</a>
                        </li>
                        <li class="c2">
                            <span class="salary" >$1,988,520</span>
                            <span class="salary_sm"  style="display:none;">$2.0M</span>
                        </li>
                        <li class="c3">14.8</li>
                    </ul>
                    <ul class="line">
                        <li class="c1">
        PG

                            <span class="posId">1</span>
                            <span class="teUsed" style="display:none;">0</span>
                        </li>
                        <li class="c2">2 Years</li>
                    </ul>
                </div>
            </div>
            <img class="team_logo fLeft" src="http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/bos.png&w=30&h=30&transparent=true" />
            <div class="btn-closePlayer" style="display: none">
                <a href="#" onclick="removeTrade('3074752','2'); return false;">
                    <img src="http://a.espncdn.com/nba/tradeMachine/images/btn-closePlayer.gif" />
                </a>
            </div>
        </div>
        <div style="position:relative; z-index:4;"></div>
        <div id="player_2596158" class="player team_2 disabled" >
            <div class="traded">Being Traded To
                <strong class="toTeam"></strong>
            </div>
            <div>
                <img class="fLeft player_mug" src="http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2596158.png&w=28&h=38&scale=crop&background=0xcccccc&transparent=false" />
                <div class="fLeft">
                    <ul class="line">
                        <li class="c1">
                            <a href="#" onclick="return false;" onmouseover="$j($j(this).parents('.player').get(0)).removeClass('active');" class="playerName">Shane&nbsp;Larkin</a>
                        </li>
                        <li class="c2">
                            <span class="salary" >$1,471,382</span>
                            <span class="salary_sm"  style="display:none;">$1.5M</span>
                        </li>
                        <li class="c3">7.0</li>
                    </ul>
                    <ul class="line">
                        <li class="c1">
        PG

                            <span class="posId">1</span>
                            <a href="#" onmouseover="toggleRestriction(this, 2596158, true, ''); return false;" onmouseout="toggleRestriction(this, 2596158, false, ''); return false;" onclick="return false;" >
                                <img class="btn" src="http://a.espncdn.com/nba/tradeMachine/images/icon-trade-restriction.png" />
                            </a>
                            <span class="teUsed" style="display:none;">0</span>
                        </li>
                        <li class="c2">1 Year</li>
                    </ul>
                </div>
            </div>
            <img class="team_logo fLeft" src="http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/bos.png&w=30&h=30&transparent=true" />
            <div class="btn-closePlayer" style="display: none">
                <a href="#" onclick="removeTrade('2596158','2'); return false;">
                    <img src="http://a.espncdn.com/nba/tradeMachine/images/btn-closePlayer.gif" />
                </a>
            </div>
        </div>
        <div style="position:relative; z-index:4;">
            <div id="restriction_2596158" class="restriction-popup">
                <h3>Signed Contract</h3>
                <span>Restriction Expires:
                    <strong>December 14, 2017</strong>
                </span>
                <br/>
                <p>When a free agent signs a contract, or when a player signed to a Two-Way contract has his contract converted to a standard NBA contract, they cannot be traded until December 15 or 3 months, whichever is later.</p>
            </div>
        </div>
        <div id="player_3056602" class="player team_2" onmouseover="highlightPlayer(this, true);" onmouseout="highlightPlayer(this, false);">
            <div class="traded">Being Traded To
                <strong class="toTeam"></strong>
            </div>
            <div>
                <img class="fLeft player_mug" src="http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3056602.png&w=28&h=38&scale=crop&background=0xcccccc&transparent=false" />
                <div class="fLeft">
                    <ul class="line">
                        <li class="c1">
                            <a href="#" onclick="return false;" onmouseover="$j($j(this).parents('.player').get(0)).removeClass('active');" class="playerName">Semi&nbsp;Ojeleye</a>
                        </li>
                        <li class="c2">
                            <span class="salary" >$1,291,892</span>
                            <span class="salary_sm"  style="display:none;">$1.3M</span>
                        </li>
                        <li class="c3">6.0</li>
                    </ul>
                    <ul class="line">
                        <li class="c1">
        PF

                            <span class="posId">6</span>
                            <span class="teUsed" style="display:none;">0</span>
                        </li>
                        <li class="c2">4 Years</li>
                    </ul>
                </div>
            </div>
            <img class="team_logo fLeft" src="http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/bos.png&w=30&h=30&transparent=true" />
            <div class="btn-closePlayer" style="display: none">
                <a href="#" onclick="removeTrade('3056602','2'); return false;">
                    <img src="http://a.espncdn.com/nba/tradeMachine/images/btn-closePlayer.gif" />
                </a>
            </div>
        </div>
        <div style="position:relative; z-index:4;"></div>
        <div id="player_2595435" class="player team_2" onmouseover="highlightPlayer(this, true);" onmouseout="highlightPlayer(this, false);">
            <div class="traded">Being Traded To
                <strong class="toTeam"></strong>
            </div>
            <div>
                <img class="fLeft player_mug" src="http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2595435.png&w=28&h=38&scale=crop&background=0xcccccc&transparent=false" />
                <div class="fLeft">
                    <ul class="line">
                        <li class="c1">
                            <a href="#" onclick="return false;" onmouseover="$j($j(this).parents('.player').get(0)).removeClass('active');" class="playerName">Abdel&nbsp;Nader</a>
                        </li>
                        <li class="c2">
                            <span class="salary" >$1,167,333</span>
                            <span class="salary_sm"  style="display:none;">$1.2M</span>
                        </li>
                        <li class="c3">4.6</li>
                    </ul>
                    <ul class="line">
                        <li class="c1">
        SF

                            <span class="posId">5</span>
                            <span class="teUsed" style="display:none;">0</span>
                        </li>
                        <li class="c2">4 Years</li>
                    </ul>
                </div>
            </div>
            <img class="team_logo fLeft" src="http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/bos.png&w=30&h=30&transparent=true" />
            <div class="btn-closePlayer" style="display: none">
                <a href="#" onclick="removeTrade('2595435','2'); return false;">
                    <img src="http://a.espncdn.com/nba/tradeMachine/images/btn-closePlayer.gif" />
                </a>
            </div>
        </div>
        <div style="position:relative; z-index:4;"></div>
        <div id="player_2451037" class="player team_2 disabled" >
            <div class="traded">Being Traded To
                <strong class="toTeam"></strong>
            </div>
            <div>
                <img class="fLeft player_mug" src="http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2451037.png&w=28&h=38&scale=crop&background=0xcccccc&transparent=false" />
                <div class="fLeft">
                    <ul class="line">
                        <li class="c1">
                            <a href="#" onclick="return false;" onmouseover="$j($j(this).parents('.player').get(0)).removeClass('active');" class="playerName">Daniel&nbsp;Theis</a>
                        </li>
                        <li class="c2">
                            <span class="salary" >$815,615</span>
                            <span class="salary_sm"  style="display:none;">$815.6K</span>
                        </li>
                        <li class="c3">14.5</li>
                    </ul>
                    <ul class="line">
                        <li class="c1">
        PF

                            <span class="posId">6</span>
                            <a href="#" onmouseover="toggleRestriction(this, 2451037, true, ''); return false;" onmouseout="toggleRestriction(this, 2451037, false, ''); return false;" onclick="return false;" >
                                <img class="btn" src="http://a.espncdn.com/nba/tradeMachine/images/icon-trade-restriction.png" />
                            </a>
                            <span class="teUsed" style="display:none;">0</span>
                        </li>
                        <li class="c2">2 Years</li>
                    </ul>
                </div>
            </div>
            <img class="team_logo fLeft" src="http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/bos.png&w=30&h=30&transparent=true" />
            <div class="btn-closePlayer" style="display: none">
                <a href="#" onclick="removeTrade('2451037','2'); return false;">
                    <img src="http://a.espncdn.com/nba/tradeMachine/images/btn-closePlayer.gif" />
                </a>
            </div>
        </div>
        <div style="position:relative; z-index:4;">
            <div id="restriction_2451037" class="restriction-popup">
                <h3>Signed Contract</h3>
                <span>Restriction Expires:
                    <strong>December 14, 2017</strong>
                </span>
                <br/>
                <p>When a free agent signs a contract, or when a player signed to a Two-Way contract has his contract converted to a standard NBA contract, they cannot be traded until December 15 or 3 months, whichever is later.</p>
            </div>
        </div>
        <div id="player_3064308" class="player team_2" onmouseover="highlightPlayer(this, true);" onmouseout="highlightPlayer(this, false);">
            <div class="traded">Being Traded To
                <strong class="toTeam"></strong>
            </div>
            <div>
                <img class="fLeft player_mug" src="http://a.espncdn.com/combiner/i?img=/i/headshots/nophoto.png&w=28&h=38&scale=crop&background=0xcccccc&transparent=false" />
                <div class="fLeft">
                    <ul class="line">
                        <li class="c1">
                            <a href="#" onclick="return false;" onmouseover="$j($j(this).parents('.player').get(0)).removeClass('active');" class="playerName">Jabari&nbsp;Bird</a>
                        </li>
                        <li class="c2">
                            <span class="salary" >&nbsp;</span>
                            <span class="salary_sm"  style="display:none;">&nbsp;</span>
                        </li>
                        <li class="c3">3.2</li>
                    </ul>
                    <ul class="line">
                        <li class="c1">
        SG

                            <span class="posId">2</span>
                            <a href="#" onmouseover="toggleRestriction(this, 3064308, true, 'byc'); return false;" onmouseout="toggleRestriction(this, 3064308, false, 'byc'); return false;" onclick="return false;" >
                                <img class="btn" src="http://a.espncdn.com/nba/tradeMachine/images/icon-2wp.gif" />
                            </a>
                            <span class="teUsed" style="display:none;">0</span>
                        </li>
                        <li class="c2">1 Year</li>
                    </ul>
                </div>
            </div>
            <img class="team_logo fLeft" src="http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/bos.png&w=30&h=30&transparent=true" />
            <div class="btn-closePlayer" style="display: none">
                <a href="#" onclick="removeTrade('3064308','2'); return false;">
                    <img src="http://a.espncdn.com/nba/tradeMachine/images/btn-closePlayer.gif" />
                </a>
            </div>
        </div>
        <div style="position:relative; z-index:4;">
            <div id="restriction_byc3064308" class="restriction-popup">
                <h3>Two-Way Contract (2WP)</h3>
                <span>2WP Expires:
                    <strong>June 30, 2018</strong>
                </span>
                <br />
                <span>Outgoing Trade Value:
                    <strong>&nbsp;</strong>
                </span>
                <p>1) The player is signed to a Two-Way contract; 2) Teams are allowed to have at most two Two-Way contracts on the roster at any given time.</p>
            </div>
        </div>
        <div id="player_3134880" class="player team_2" onmouseover="highlightPlayer(this, true);" onmouseout="highlightPlayer(this, false);">
            <div class="traded">Being Traded To
                <strong class="toTeam"></strong>
            </div>
            <div>
                <img class="fLeft player_mug" src="http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3134880.png&w=28&h=38&scale=crop&background=0xcccccc&transparent=false" />
                <div class="fLeft">
                    <ul class="line">
                        <li class="c1">
                            <a href="#" onclick="return false;" onmouseover="$j($j(this).parents('.player').get(0)).removeClass('active');" class="playerName">Kadeem&nbsp;Allen</a>
                        </li>
                        <li class="c2">
                            <span class="salary" >&nbsp;</span>
                            <span class="salary_sm"  style="display:none;">&nbsp;</span>
                        </li>
                        <li class="c3">N/A</li>
                    </ul>
                    <ul class="line">
                        <li class="c1">
        SG

                            <span class="posId">2</span>
                            <a href="#" onmouseover="toggleRestriction(this, 3134880, true, 'byc'); return false;" onmouseout="toggleRestriction(this, 3134880, false, 'byc'); return false;" onclick="return false;" >
                                <img class="btn" src="http://a.espncdn.com/nba/tradeMachine/images/icon-2wp.gif" />
                            </a>
                            <span class="teUsed" style="display:none;">0</span>
                        </li>
                        <li class="c2">2 Years</li>
                    </ul>
                </div>
            </div>
            <img class="team_logo fLeft" src="http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/bos.png&w=30&h=30&transparent=true" />
            <div class="btn-closePlayer" style="display: none">
                <a href="#" onclick="removeTrade('3134880','2'); return false;">
                    <img src="http://a.espncdn.com/nba/tradeMachine/images/btn-closePlayer.gif" />
                </a>
            </div>
        </div>
        <div style="position:relative; z-index:4;">
            <div id="restriction_byc3134880" class="restriction-popup">
                <h3>Two-Way Contract (2WP)</h3>
                <span>2WP Expires:
                    <strong>June 30, 2019</strong>
                </span>
                <br />
                <span>Outgoing Trade Value:
                    <strong>&nbsp;</strong>
                </span>
                <p>1) The player is signed to a Two-Way contract; 2) Teams are allowed to have at most two Two-Way contracts on the roster at any given time.</p>
            </div>
        </div>
    </div>
    <div class="roster_header clear">
        <p class="player-desc">Trade Exceptions</p>
    </div>
    <div class="exceptions">
        <div id="exception_24249" class="exception team_2">
            <div>
                <img class="fLeft player_mug" src="http://a.espncdn.com/nba/tradeMachine//images/tradeException.gif" />
                <div class="fLeft">
                    <ul class="line">
                        <li class="c1">
                            <span class="playerName">Gordon Hayward</span>
                        </li>
                        <li class="c2">
                            <span class="salary" >$8,406,000</span>
                            <span class="salary_sm"  style="display:none;">$8.4M</span>
                        </li>
                        <li class="c3"></li>
                    </ul>
                    <ul class="line">
                        <li class="c1"></li>
                        <li class="c2"></li>
                    </ul>
                </div>
            </div>
            <img class="team_logo fLeft" src="http://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/bos.png&w=30&h=30&transparent=true.gif" width="30" height="30"/>
            <div class="btn-closePlayer" style="display: none">
                <a href="#" onclick="return false;">
                    <img src="http://a.espncdn.com/nba/tradeMachine/images/btn-closePlayer.gif" />
                </a>
            </div>
        </div>
    </div>
</div>
</div>
`;

module.exports = {
  teamDetailsHtml,
};
