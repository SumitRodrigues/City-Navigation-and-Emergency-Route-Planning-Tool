import osmnx as ox
import networkx as nx
import numpy as np

# Download and model a street network for a city
def download_osm_data(place_name):
    graph = ox.graph_from_place(place_name, network_type='drive')
    # Manually add edge lengths
    for u, v, key, data in graph.edges(keys=True, data=True):
        if 'length' not in data:
            p1 = graph.nodes[u]['y'], graph.nodes[u]['x']
            p2 = graph.nodes[v]['y'], graph.nodes[v]['x']
            data['length'] = ox.distance.great_circle_vec(p1, p2)
    return graph

# Convert the graph to an adjacency matrix
def graph_to_adj_matrix(graph):
    n = len(graph.nodes)
    node_index = {node: idx for idx, node in enumerate(graph.nodes)}
    adj_matrix = np.full((n, n), float('inf'))
    np.fill_diagonal(adj_matrix, 0)

    for u, v, data in graph.edges(data=True):
        i, j = node_index[u], node_index[v]
        adj_matrix[i][j] = data['length']  # Use length as weight

    return adj_matrix, node_index

# Floyd-Warshall algorithm implementation
def floyd_warshall(adj_matrix):
    n = len(adj_matrix)
    dist = adj_matrix.copy()

    for k in range(n):
        for i in range(n):
            for j in range(n):
                dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])

    return dist

# Main function
def main():
    place_name = "Pasadena, California, USA"
    graph = download_osm_data(place_name)
    adj_matrix, node_index = graph_to_adj_matrix(graph)
    shortest_paths = floyd_warshall(adj_matrix)

    # Print the shortest path from the first node to the last node
    start_node = list(node_index.keys())[0]
    end_node = list(node_index.keys())[-1]
    start_idx = node_index[start_node]
    end_idx = node_index[end_node]
    print(f"Shortest path from node {start_node} to node {end_node} is {shortest_paths[start_idx][end_idx]} meters")

if __name__ == "__main__":
    main()
