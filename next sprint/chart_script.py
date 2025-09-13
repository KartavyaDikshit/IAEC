import plotly.graph_objects as go

# Load the data
data = [
  {
    "Location": "IAEC Consultants Pvt. Ltd.",
    "Type": "Company",
    "Level": 1,
    "Phone": "+91 863 970 6102",
    "Email": "ravinder@iaecconsultants.com",
    "Parent": ""
  },
  {
    "Location": "HEAD OFFICE - Hyderabad",
    "Type": "Head Office", 
    "Level": 2,
    "Phone": "+91-9966435511",
    "Email": "contact@iaecconsultants.com",
    "Parent": "IAEC Consultants Pvt. Ltd."
  },
  {
    "Location": "Ahmedabad Branch",
    "Type": "Branch",
    "Level": 3, 
    "Phone": "+91 863 970 6102",
    "Email": "ravinder@iaecconsultants.com",
    "Parent": "HEAD OFFICE - Hyderabad"
  },
  {
    "Location": "Kukatpally Branch", 
    "Type": "Branch",
    "Level": 3,
    "Phone": "+91 7729997891", 
    "Email": "kripal@iaecconsultants.com",
    "Parent": "HEAD OFFICE - Hyderabad"
  }
]

# Define positions
positions = {
    "IAEC Consultants Pvt. Ltd.": (0, 4),
    "HEAD OFFICE - Hyderabad": (0, 2.5),
    "Ahmedabad Branch": (-1.8, 1),
    "Kukatpally Branch": (1.8, 1)
}

# Create figure
fig = go.Figure()

# Add connecting lines
# Company to Head Office
fig.add_shape(
    type="line",
    x0=0, y0=3.6, x1=0, y1=3.1,
    line=dict(color="#5D878F", width=4)
)

# Head Office to branches  
fig.add_shape(
    type="line",
    x0=0, y0=2.0, x1=-1.8, y1=1.5,
    line=dict(color="#5D878F", width=3)
)

fig.add_shape(
    type="line", 
    x0=0, y0=2.0, x1=1.8, y1=1.5,
    line=dict(color="#5D878F", width=3)
)

# Process each organizational unit
for item in data:
    x, y = positions[item["Location"]]
    
    # Set styling based on type
    if item["Type"] == "Company":
        color = "#1FB8CD"
        box_width = 2.8
        box_height = 0.8
        text_color = "white"
        border_color = "#13343B"
        border_width = 4
        icon = "🏢"
        icon_size = 20
    elif item["Type"] == "Head Office":
        color = "#DB4545"  # Bright red for prominence
        box_width = 3.2
        box_height = 1.0
        text_color = "white"
        border_color = "#B4413C"
        border_width = 5
        icon = "🏛️"
        icon_size = 24
    else:  # Branch
        color = "#2E8B57"
        box_width = 2.4
        box_height = 0.8
        text_color = "white"
        border_color = "#13343B"
        border_width = 3
        icon = "🏪"
        icon_size = 18
    
    # Add shadow for head office
    if item["Type"] == "Head Office":
        fig.add_shape(
            type="rect",
            x0=x-box_width/2+0.1, y0=y-box_height/2-0.1,
            x1=x+box_width/2+0.1, y1=y+box_height/2-0.1,
            fillcolor="rgba(0,0,0,0.3)",
            line=dict(width=0)
        )
    
    # Add main rectangle
    fig.add_shape(
        type="rect",
        x0=x-box_width/2, y0=y-box_height/2,
        x1=x+box_width/2, y1=y+box_height/2,
        fillcolor=color,
        line=dict(color=border_color, width=border_width)
    )
    
    # Format text content
    if item["Type"] == "Company":
        main_text = "IAEC Consultants Pvt. Ltd."
        phone_text = f"📞 {item['Phone']}"
        email_text = f"✉️ ravinder@iaec..."
    elif item["Type"] == "Head Office":
        main_text = "HEAD OFFICE - Hyderabad"
        phone_text = f"📞 {item['Phone']}"  
        email_text = f"✉️ contact@iaec..."
    else:
        if "Ahmedabad" in item["Location"]:
            main_text = "Ahmedabad Branch"
            phone_text = f"📞 {item['Phone']}"
            email_text = f"✉️ ravinder@iaec..."
        else:
            main_text = "Kukatpally Branch" 
            phone_text = f"📞 {item['Phone']}"
            email_text = f"✉️ kripal@iaec..."
    
    # Add icon
    fig.add_trace(go.Scatter(
        x=[x], y=[y+0.25],
        mode='text',
        text=[icon],
        textfont=dict(size=icon_size),
        showlegend=False,
        hoverinfo='skip'
    ))
    
    # Add main location text
    fig.add_trace(go.Scatter(
        x=[x], y=[y+0.05],
        mode='text',
        text=[main_text],
        textfont=dict(
            size=14 if item["Type"] == "Head Office" else 12,
            color=text_color,
            family="Arial Black" if item["Type"] == "Head Office" else "Arial"
        ),
        showlegend=False,
        hoverinfo='skip'
    ))
    
    # Add phone number
    fig.add_trace(go.Scatter(
        x=[x], y=[y-0.15],
        mode='text',
        text=[phone_text],
        textfont=dict(
            size=10,
            color=text_color
        ),
        showlegend=False,
        hoverinfo='skip'
    ))
    
    # Add email
    fig.add_trace(go.Scatter(
        x=[x], y=[y-0.3],
        mode='text', 
        text=[email_text],
        textfont=dict(
            size=9,
            color=text_color
        ),
        showlegend=False,
        hovertemplate=f"<b>{item['Location']}</b><br>Phone: {item['Phone']}<br>Email: {item['Email']}<extra></extra>"
    ))

# Update layout
fig.update_layout(
    title="IAEC Organization Structure",
    xaxis=dict(
        range=[-3.5, 3.5],
        showgrid=False,
        showticklabels=False,
        zeroline=False
    ),
    yaxis=dict(
        range=[0.2, 5],
        showgrid=False,
        showticklabels=False,
        zeroline=False
    ),
    plot_bgcolor="white",
    paper_bgcolor="white"
)

# Save the chart
fig.write_image("iaec_org_chart.png", width=1000, height=800, scale=2)
print("Final organization chart saved as iaec_org_chart.png")