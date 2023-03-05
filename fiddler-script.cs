import Fiddler;

class Handlers
{
    static function OnBeforeRequest(oSession: Session) {
        // Captures Era Backend (eracentral.kyiro)
        if (oSession.hostname.Contains("eracentral.kyiro.repl.co"))
        {
            if (oSession.HTTPMethodIs("CONNECT"))
            {
                oSession["x-replywithtunnel"] = "FortniteTunnel";
                return;
            }

            oSession.fullUrl = "http://127.0.0.1:7575" + oSession.PathAndQuery;
        }
        // Captures Era Backend (eracen.danihhhhh)
        if (oSession.hostname.Contains("eracen.danihhhhh.repl.co"))
        {
            if (oSession.HTTPMethodIs("CONNECT"))
            {
                oSession["x-replywithtunnel"] = "FortniteTunnel";
                return;
            }

            oSession.fullUrl = "http://127.0.0.1:7575" + oSession.PathAndQuery;
        }
    }
}