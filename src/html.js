import React from "react"
import PropTypes from "prop-types"

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-10273473-2"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-10273473-2');
            gtag('config', 'AW-973476681');
          </script>
          <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/356419.js"></script>
          <script type="text/javascript" dangerouslySetInnerHTML= {{ __html: `
            window._chatlio = window._chatlio||[];
            !function() {
              var t=document.getElementById("chatlio-widget-embed");
              if(t&&window.ChatlioReact&&_chatlio.init)return void _chatlio.init(t,ChatlioReact);
              for(var e=function(t){return function(){_chatlio.push([t].concat(arguments)) }},i=["configure","identify","track","show","hide","isShown","isOnline", "page", "open", "showOrHide"],a=0;a<i.length;a++)_chatlio[i[a]]||(_chatlio[i[a]]=e(i[a]));
              var n=document.createElement("script"),c=document.getElementsByTagName("script")[0];n.id="chatlio-widget-embed",n.src="https://w.chatlio.com/w.chatlio-widget.js",n.async=!0,n.setAttribute("data-embed-version","2.3");
              n.setAttribute('data-widget-id','413f13c1-0a3b-447f-45a6-f99b340d8c78');
              c.parentNode.insertBefore(n,c);
            }();
          `}}></script>
          <link rel="preload" href="https://use.typekit.net/lcb6luw.css" as="style" crossOrigin="crossorigin"></link>
          <link rel="stylesheet" href="https://use.typekit.net/lcb6luw.css"></link>
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
